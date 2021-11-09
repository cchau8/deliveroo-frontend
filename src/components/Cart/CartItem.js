import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = ({ item, handlePlus, handleMinus }) => {
	const { title, price, quantity, id } = item;
	return (
		<div className="cart-item">
			<div className="left">
				<div className="quantity">
					<button
						onClick={() => {
							handleMinus(id);
						}}
					>
						<FontAwesomeIcon icon="minus" />
					</button>
					<span>{quantity}</span>
					<button
						onClick={() => {
							handlePlus(id);
						}}
					>
						<FontAwesomeIcon icon="plus" />
					</button>
				</div>
				<span>{title}</span>
			</div>
			<div className="right">
				<span>{(price * quantity).toFixed(2)} €</span>
			</div>
		</div>
	);
};

export default CartItem;
