import React from "react";

const Meal = ({ title, description, price, image, popular }) => {
	return (
		<li className={`meal${image ? "" : " no-image"}`}>
			<div className="description">
				<h3>{title}</h3> <p>{description}</p>
				<div className="price">
					<span>{price} €</span>
					<span className="popular">{popular && "⭐ populaire"}</span>
				</div>
			</div>

			{image && <img src={image} alt="" />}
		</li>
	);
};

export default Meal;
