import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
		totalAmount: 0,
		amount: 0,
		totalPrice: 0,
	},
	reducers: {
		/* Thêm sản phẩm vào giỏ hàng */
		addToCart(state, action) {
			try {
				const productId = action.payload;
				console.log('🚀 ~ file: cartSlice.jsx:15 ~ productId:', productId);
				/* lấy ra mặt hàng đã được chọn */
				const exist = state.cart.find(
					(product) =>
						product.id === productId.id &&
						product.size === productId.size &&
						product.color === productId.color
				);
				console.log('🚀 ~ file: cartSlice.jsx:22 ~ exist:', exist);
				if (exist) {
					/* nếu mặt hàng có trong giỏ hàng rồi thì tăng số lượng và tăng giá thanh toán  */
					exist.amount += 1;
					exist.totalPrice += productId.price;
					state.totalAmount++;
					state.totalPrice += productId.price;
				} else {
					/* nếu mặt hàng chưa có trong giỏ hàng thì thêm vào giỏ hàng */
					state.cart.push({
						id: productId.id,
						amount: 1,
						img: productId.img,
						text: productId.text,
						size: productId.size,
						color: productId.color,
						price: productId.price,
						totalPrice: productId.price,
						name: productId.name,
					});
					state.totalAmount++;
					state.totalPrice += productId.price;
				}
			} catch (error) {
				console.log(error);
			}
		},
		/* Xóa sản phẩm khỏi giỏ hàng */
		removeFromCart: (state, action) => {
			const productId = action.payload;
			try {
				const exist = state.cart.find(
					(product) =>
						product.id === productId.id &&
						product.size === productId.size &&
						product.color === productId.color
				);
				if (exist.amount === 1) {
					state.totalAmount--;
					state.totalPrice -= exist.price;
					state.cart = state.cart.filter(
						(product) =>
							product.id !== productId.id ||
							product.size !== productId.size ||
							product.color !== productId.color
					);
				} else {
					exist.amount -= 1;
					exist.totalPrice -= exist.price;
					state.totalAmount--;
					state.totalPrice -= exist.price;
				}
			} catch (error) {
				console.log(error);
			}
		},
	},
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
