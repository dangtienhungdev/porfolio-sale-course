import { IPayment } from './payments.type';

export interface IUserLogin {
	email: string;
	password: string;
}

export interface IUserRegister {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface User {
	_id: string;
	name: string;
	email: string;
	role: string;
	createdAt: string;
	updatedAt: string;
	orders: any[]; // or define a more specific type for orders
}

export interface CurrentUser {
	accessToken: string;
	msg: string;
	user: User;
}

export interface IUserInfoOrder {
	_id: string;
	name: string;
	address: string;
	phone: string;
}

export interface IUserInfoManager extends User {
	phone?: string;
	address?: string;
	paymentMethodId?: Omit<IPayment, 'userId'>[];
}
