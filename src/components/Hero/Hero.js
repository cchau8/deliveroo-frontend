import React from "react";
import "./hero.css";
const Hero = ({ data }) => {
	const restaurant = data.restaurant;
	return (
		<div className="hero container">
			<div className="hero-description">
				<h1>{restaurant.name}</h1>
				<p>{restaurant.description}</p>
			</div>
			<img src={restaurant.picture} alt="restaurant-header" />
		</div>
	);
};

export default Hero;
