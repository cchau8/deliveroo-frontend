import React from "react";
import "./cart.css";
import CartInfo from "./CartInfo";

const Cart = ({ cart, setCart, mobile, setShowCart, showCart }) => {
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
		cart.map((el) => (sub = sub + el.price * el.quantity));
		return sub.toFixed(2);
	};

	// Calcul du total
	const deliveryFee = 2.5;
	const total = (Number(subTotal()) + Number(deliveryFee)).toFixed(2);

	return (
		<div className={`cart${showCart ? " mobile" : " not-mobile"}`}>
			{!showCart && (
				<button className={`confirm-cart${cart.length === 0 ? " empty" : ""}`}>
					Valider mon panier
				</button>
			)}
			{cart.length === 0 ? (
				<span className="empty-cart">Votre panier est vide</span>
			) : (
				<CartInfo
					showCart={showCart}
					setShowCart={setShowCart}
					cart={cart}
					handleMinus={handleMinus}
					handlePlus={handlePlus}
					subTotal={subTotal}
					deliveryFee={deliveryFee}
					total={total}
				/>
			)}
		</div>
	);
};

export default Cart;
