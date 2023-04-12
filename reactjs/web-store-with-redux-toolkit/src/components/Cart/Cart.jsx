import {
	Button,
	Dialog,
	DialogBody,
	DialogFooter,
	DialogHeader,
	Tooltip,
} from '@material-tailwind/react';
import { useDispatch, useSelector } from 'react-redux';

import React from 'react';
import { removeFromCart } from '../../features/cartSlice/cartSlice';

const Cart = ({ openModal, setOpen }) => {
	const dispatch = useDispatch();
	const carts = useSelector((state) => state.cart.cart);
	const totalPrice = useSelector((state) => state.cart.totalPrice);
	return (
		<div>
			{carts.length > 0 ? (
				<Dialog open={openModal} handler={() => setOpen(false)} size="xl">
					<DialogHeader>Its a simple dialog.</DialogHeader>
					<DialogBody
						divider
						className="flex flex-col items-start justify-center"
					>
						{carts.map((cart, index) => {
							return (
								<div key={index}>
									<div className="gap-x-4 grid grid-cols-2 py-4">
										<div>
											<img
												src={cart.img}
												alt={cart.name}
												className="rounded-lg h-[125px] w-full object-cover"
											/>
											<div className="flex flex-col items-start">
												<h4 className="mt-4 text-base font-bold text-black">
													{cart.name}
												</h4>
											</div>
											<div className="max-w-xs">
												<p className="line-clamp-2 text-sm font-normal text-gray-500">
													{cart.text}
												</p>
											</div>
										</div>
										<div>
											<p className="pt-2 text-sm">
												Selected size: <span>{cart.size}</span>
											</p>
											<p className="pt-2 text-sm">
												Selected color:
												<span
													className="px-2 ml-2 rounded-full"
													style={{ backgroundColor: cart.color }}
												></span>
											</p>
											<p className="pt-2 text-sm">
												Amount: <span className="">{cart.amount}</span>
											</p>
											<p className="pt-2 text-sm">
												Singal Item Price:
												<span className="ml-2">{cart.price}$</span>
											</p>
											<p className="pt-2 text-sm">
												Total price:
												<span className="">{cart.totalPrice}$</span>
											</p>
											<div className="pt-4">
												<Tooltip
													content="Remove from the Cart"
													placement="bottom"
												>
													<Button
														size="sm"
														color="red"
														ripple={true}
														variant="filled"
														onClick={() => dispatch(removeFromCart(cart))}
													>
														Remove
													</Button>
												</Tooltip>
											</div>
										</div>
									</div>
								</div>
							);
						})}
					</DialogBody>
					<DialogFooter>
						<div className="flex items-center justify-start">
							<p className="pt-2 text-sm">
								Total Price of All Products:
								<span className="font-bold">{totalPrice}$</span>
							</p>
						</div>
					</DialogFooter>
				</Dialog>
			) : (
				<Dialog
					size="xl"
					open={openModal}
					className="outline-0 border-0"
					handler={() => setOpen(false)}
					animate={{
						mount: { scale: 1, y: 0 },
						unmount: { scale: 0.9, y: -100 },
					}}
				>
					<DialogHeader>Its a simple dialog.</DialogHeader>
					<DialogBody divider>
						<h1 className="font-inter text-3xl capitalize">
							Your bag is empty
						</h1>
					</DialogBody>
				</Dialog>
			)}
		</div>
	);
};

export default Cart;
