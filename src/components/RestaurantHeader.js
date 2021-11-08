import React from "react";

const RestaurantHeader = ({ data }) => {
	const restaurant = data.restaurant;
	return (
		<div className="rest-header container">
			<div className="rest-description">
				<h1>{restaurant.name}</h1>
				<p>{restaurant.description}</p>
			</div>

			<img src={restaurant.picture} alt="restaurant-header" />
		</div>
	);
};

export default RestaurantHeader;
