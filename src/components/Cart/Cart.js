import React from "react";
import "./cart.css";
import CartInfo from "./CartInfo";

const Cart = ({ cart, setCart, setShowCart, showCart }) => {
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
					setCart={setCart}
				/>
			)}
		</div>
	);
};

export default Cart;
