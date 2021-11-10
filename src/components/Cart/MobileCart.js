import React from "react";
import Cart from "./Cart";

const MobileCart = ({ showCart, setShowCart, cart, setCart }) => {
	const mobileCartDisplay = () => {
		if (showCart && cart.length > 0) {
			return true;
		}
		return false;
	};

	return (
		<>
			{mobileCartDisplay() && (
				<Cart cart={cart} setCart={setCart} showCart={showCart} setShowCart={setShowCart} />
			)}

			<button
				className={`mobile-cart${cart.length === 0 && !showCart ? " grey" : ""}`}
				onClick={() => {
					setShowCart(true);
				}}
			>
				{mobileCartDisplay() ? "Valider" : "Voir"} le panier
			</button>
		</>
	);
};

export default MobileCart;
