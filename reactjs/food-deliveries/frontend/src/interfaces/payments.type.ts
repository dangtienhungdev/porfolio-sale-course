export interface IPayment {
	_id: string;
	userId: string;
	cardNumber: string;
	cardExpiry: string;
	is_active: boolean;
}
