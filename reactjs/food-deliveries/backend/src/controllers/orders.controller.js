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
			/* kiếm tra xem người dùng đã đặt hàng chưa */
			const orderUser = await Order.findOne({
				userId: body.userId,
				status: 'pending',
			});
			if (!orderUser) {
				console.log(
					'🚀 ~ file: orders.controller.js:18 ~ create: ~ orderUser:',
					orderUser
				);
				/* nếu người dùng chưa đặt hàng thì sẽ tạo đơn hàng */
				const order = await Order.create({
					userId: body.userId,
					items: [
						{
							foodId: body.foodId,
							quantity: body.quantity | 1,
							price: body.price,
						},
					],
					status: body.status,
					total: Number(body.price),
					paymentMethodId: body.paymentMethodId,
					is_active: body.is_active,
				});
				if (!order) {
					return res.status(400).json({ message: 'Create order failed' });
				}
				/* update order detail */
				const orderDetails = {
					foodId: body.foodId,
					orderId: order._id,
					quantity: body.quantity,
					price: body.price,
					current_price: body.price,
				};
				await OrderDetail.insertMany(orderDetails);
				return res.status(200).json({ message: 'Create order successfully' });
			}
			/* nếu người dùng đã đặt hàng thì sẽ update đơn hàng */
			const existsFood = orderUser.items.find(
				(food) => food.foodId == body.foodId
			);
			if (existsFood) {
				const quantity = Number(existsFood.quantity) + Number(body.quantity);
				const price = Number(existsFood.price) + Number(body.price);
				existsFood.quantity = quantity;
				existsFood.price = price;
				orderUser.total = price;
				await orderUser.save();
				/* update order detail */
				const orderDetail = await OrderDetail.findOne({
					foodId: body.foodId,
					orderId: orderUser._id,
				});
				if (orderDetail) {
					const quantityOrderDetail =
						Number(orderDetail.quantity) + Number(body.quantity);
					const priceOrderDetail =
						Number(orderDetail.price) + Number(body.price);
					orderDetail.quantity = quantityOrderDetail;
					orderDetail.price = priceOrderDetail;
					orderDetail.current_price = priceOrderDetail;
					await orderDetail.save();
				}
			} else {
				orderUser.items.push({
					foodId: body.foodId,
					quantity: body.quantity,
					price: body.price,
				});
				await orderUser.save();
				/* update order detail */
				await OrderDetail.create({
					foodId: body.foodId,
					orderId: orderUser._id,
					quantity: body.quantity,
					price: body.price,
					current_price: body.price,
				});
			}
			if (orderUser.items.length > 0) {
				const totalCurren = orderUser.items.reduce((total, item) => {
					return total + item.price;
				}, 0);
				orderUser.total = totalCurren;
				await orderUser.save();
			}
			return res.status(200).json({ message: 'Update order successfully' });
			// const orderDetail = await OrderDetail.findOne({
			// 	foodId: body.foodId,
			// 	orderId: orderUser._id,
			// });
			// if (orderDetail) {
			// 	orderDetail.quantity += body.quantity;
			// 	orderDetail.price += body.price;
			// 	orderDetail.current_price += body.price;
			// 	await orderDetail.save();
			// 	return res.status(200).json({ message: 'Update order successfully' });
			// } else {
			// 	await OrderDetail.create({
			// 		foodId: body.foodId,
			// 		orderId: orderUser._id,
			// 		quantity: body.quantity,
			// 		price: body.price,
			// 		current_price: body.price,
			// 	});
			// 	return res.status(200).json({ message: 'Update order successfully' });
			// }
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
			return res.status(500).json({ message: error.message });
		}
	},
};
