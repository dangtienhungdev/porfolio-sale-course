import { IFood } from '../../interfaces/foods.type';
import { createSlice } from '@reduxjs/toolkit';

interface OrderState {
	order: IFood[];
	totalAmount: number;
	amount: number;
	totalPrice: number;
}

export const orderSlice = createSlice({
	name: 'order',
	initialState: {
		order: [],
		totalAmount: 0,
		amount: 0,
		totalPrice: 0,
	} as OrderState,
	reducers: {
		/* add cart */
		addOrderFood: (state, action) => {
			let food = action.payload;
			const index = state.order.findIndex((item: IFood) => item._id === food._id);
			if (index !== -1) {
				state.order[index].amount += 1;
				state.totalAmount += 1;
				state.totalPrice += state.order[index].price;
			}
			if (index === -1) {
				state.totalAmount += 1;
				state.totalPrice += food.price;
				food = { ...food, amount: 1, totalPrice: food.price };
				state.order.push(food);
			}
			state.totalAmount = state.order.reduce((acc: number, item: IFood) => acc + item.amount, 0);
		},
		/* remove food to cart */
		removeFood: (state, action) => {
			const foodId = action.payload;
			const exists = state.order.find((item: IFood) => item._id === foodId);
			if (exists) {
				state.totalAmount--;
				state.totalPrice -= exists.price * exists.amount;
				state.order = state.order.filter((item: IFood) => item._id !== foodId);
				state.totalAmount = state.order.reduce((acc: number, item: IFood) => acc - item.amount, 0);
			} else {
				state.order = [];
				state.totalAmount = 0;
				state.totalPrice = 0;
			}
		},
		/* increase amount food */
		increaseAmount: (state, action) => {
			const foodId = action.payload;
			const index = state.order.findIndex((item: IFood) => item._id === foodId);
			if (index !== -1) {
				state.order[index].amount += 1;
				state.totalAmount += 1;
				state.totalPrice += state.order[index].price;
			}
		},
		/* decrease amount food */
		decreaseAmount: (state, action) => {
			const foodId = action.payload;
			const index = state.order.findIndex((item: IFood) => item._id === foodId);
			if (index !== -1) {
				state.order[index].amount -= 1;
				state.totalAmount -= 1;
				state.totalPrice -= state.order[index].price;
				if (state.order[index].amount === 0) {
					state.order = state.order.filter((item: IFood) => item._id !== foodId);
				}
			}
		},
	},
});

export const { addOrderFood, removeFood, increaseAmount, decreaseAmount } = orderSlice.actions;

export default orderSlice.reducer;
