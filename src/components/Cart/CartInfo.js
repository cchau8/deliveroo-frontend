import React from "react";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CartInfo = ({
	showCart,
	setShowCart,
	cart,
	handleMinus,
	handlePlus,
	subTotal,
	deliveryFee,
	total,
}) => {
	return (
		<div className="cart-info">
			{showCart && (
				<button
					className="close-cart"
					onClick={() => {
						setShowCart(false);
					}}
				>
					<FontAwesomeIcon icon="times" />
				</button>
			)}
			<div className="cart-list">
				{cart.map((el, i) => {
					return (
						<CartItem
							key={i}
							item={el}
							handleMinus={handleMinus}
							handlePlus={handlePlus}
						/>
					);
				})}
			</div>
			<hr />
			<div className="sub">
				<div className="subtotal">
					<span>Sous-total : </span>
					<span>{subTotal()} €</span>
				</div>
				<div className="delivery-fee">
					<span>Frais de livraison : </span>
					<span>{deliveryFee} €</span>
				</div>
			</div>
			<hr />
			<div className="total">
				<span>Total : </span>
				<span>{total} €</span>
			</div>
		</div>
	);
};

export default CartInfo;
