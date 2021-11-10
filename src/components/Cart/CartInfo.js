import React from "react";
import CartItem from "./CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CartInfo = ({ showCart, setShowCart, cart, setCart }) => {
	// Fonction du bouton plus du panier
	const handlePlus = (id) => {
		const newCart = [...cart];
		const index = newCart.findIndex((el) => el.id === id);
		newCart[index].quantity++;
		setCart(newCart);
	};

	// Fonction du bouton moins du panier
	const handleMinus = (id) => {
		const newCart = [...cart];
		const index = newCart.findIndex((el) => el.id === id);
		if (newCart[index].quantity > 1) {
			newCart[index].quantity--;
		} else {
			newCart.splice(index, 1);
		}
		setCart(newCart);
	};

	// Calcul du sous-total
	const subTotal = () => {
		let sub = 0;
		cart.forEach((el) => (sub = sub + el.price * el.quantity));
		return sub.toFixed(2);
	};

	// Calcul du total
	const deliveryFee = 2.5;
	const total = (Number(subTotal()) + Number(deliveryFee)).toFixed(2);

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
					<span>{deliveryFee.toFixed(2)} €</span>
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
