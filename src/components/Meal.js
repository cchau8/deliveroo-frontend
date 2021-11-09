import React from "react";

const Meal = ({ meal, addToCart }) => {
	const { title, description, price, picture, popular, id } = meal;

	return (
		<li
			className={`meal${picture ? "" : " no-image"}`}
			onClick={() => {
				addToCart(id, title, price);
			}}
		>
			<div className="description">
				<h3>{title}</h3> <p>{description}</p>
				<div className="price">
					<span>{price} €</span>
					<span className="popular">{popular && "⭐ populaire"}</span>
				</div>
			</div>

			{picture && <img src={picture} alt="" />}
		</li>
	);
};

export default Meal;
