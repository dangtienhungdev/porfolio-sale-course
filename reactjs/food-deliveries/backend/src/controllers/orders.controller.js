import Order from '../models/orders.model';
import OrderDetail from '../models/orderDetails.model';
import { orderSchema } from '../validates/orders.validate';

export const orderController = {
	// create order
	create: async (req, res) => {
		try {
			const body = req.body;
			/* validate */
			await orderSchema.validate(body);
			/* check exists order */
			const existsOrder = await Order.findOne({
				userId: body.userId,
				status: 'pending',
			});
			if (!existsOrder) {
				const items = body.items;
				const total = items.reduce((total, item) => {
					const price = Number(item.price) * Number(item.quantity);
					return total + price;
				}, 0);
				const order = await Order.create({
					userId: body.userId,
					items: items,
					status: body.status,
					total: total + Number(body.priceShipping),
					priceShipping: body.priceShipping,
					address: body.address,
					paymentMethodId: body.paymentMethodId,
					is_active: body.is_active,
				});
				if (!order) {
					return res.status(400).json({ message: 'Create order failed' });
				}
				/* update order detail */
				const orderDetails = items.map((item) => {
					return {
						foodId: item.foodId,
						orderId: order._id,
						quantity: item.quantity,
						price: item.price,
						current_price: item.price,
					};
				});
				await OrderDetail.insertMany(orderDetails);
				return res.status(200).json({ message: 'Create order successfully' });
			}
			/* update order */
			for (let item of existsOrder.items) {
				for (let food of body.items) {
					if (item.foodId.toString() === food.foodId.toString()) {
						item.quantity = Number(item.quantity) + Number(food.quantity);
						/* update order detail */
						const orderDetail = await OrderDetail.findOne({
							foodId: food.foodId,
							orderId: existsOrder._id,
						});
						if (orderDetail) {
							orderDetail.quantity =
								Number(orderDetail.quantity) + Number(food.quantity);
							orderDetail.price =
								Number(orderDetail.price) + Number(food.price);
							orderDetail.current_price =
								Number(orderDetail.current_price) + Number(food.price);
							await orderDetail.save();
						} else {
							await OrderDetail.create({
								foodId: food.foodId,
								orderId: existsOrder._id,
								quantity: food.quantity,
								price: food.price,
								current_price: food.price,
							});
						}
					} else {
						existsOrder.items.push(food);
						/* update order detail */
						await OrderDetail.create({
							foodId: food.foodId,
							orderId: existsOrder._id,
							quantity: food.quantity,
							price: food.price,
							current_price: food.price,
						});
					}
				}
			}
			const totalNew = body.items.reduce((total, itemNew) => {
				const price = Number(itemNew.price) * Number(itemNew.quantity);
				return total + price;
			}, 0);
			existsOrder.total = Number(existsOrder.total) + Number(totalNew);
			await existsOrder.save();
			return res.status(200).json({ message: 'Update order successfully' });
		} catch (error) {
			if (error.errors) {
				return res.status(400).json({ message: error.errors });
			}
			return res.status(500).json({ message: error.message });
		}
	},
	/* get All Order */
	getAll: async (req, res) => {
		try {
			const { _page = 1, _limit = 10, q } = req.query;
			const options = {
				page: _page,
				limit: _limit,
				populate: [
					{ path: 'items.foodId', select: 'name' },
					{ path: 'userId', select: 'name address phone' },
				],
			};
			const orders = await Order.paginate({}, options);
			return res.status(200).json(orders);
		} catch (error) {
			if (error.errors) {
				return res.status(400).json({ message: error.errors });
			}
			return res.status(500).json({ message: error.message });
		}
	},
	/* get One */
	getOne: async (req, res) => {
		try {
			const { id } = req.params;
			const order = await Order.findById(id).populate([
				{ path: 'items.foodId', select: 'name' },
				{ path: 'userId', select: 'name email address phone' },
			]);
			if (!order) {
				return res.status(400).json({ message: 'Order not found' });
			}
			return res.status(200).json(order);
		} catch (error) {
			if (error.errors) {
				return res.status(400).json({ message: error.errors });
			}
			return res.status(500).json({ message: error.message });
		}
	},
	/* get one order by userId */
	getOrderByUserId: async (req, res) => {
		try {
			const { id } = req.params;
			if (!id) {
				return res.status(400).json({ message: 'User not found' });
			}
			/* get order by userId */
			const orderByUserId = await Order.find({ userId: id }).populate({
				path: 'items.foodId',
			});
			if (!orderByUserId) {
				return res.status(400).json({ message: 'Order not found' });
			}
			return res.status(200).json(orderByUserId);
		} catch (error) {
			if (error.errors) {
				return res.status(400).json({ message: error.errors });
			}
			return res.status(500).json({ message: error.message });
		}
	},
};
