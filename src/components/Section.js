import React from "react";
import Meal from "./Meal";

const Section = ({ name, meals, addToCart }) => {
	return (
		<section className="container">
			<h2>{name}</h2>
			<ul>
				{meals.map((el, i) => {
					return <Meal key={el.id} meal={el} addToCart={addToCart} />;
				})}
			</ul>
		</section>
	);
};

export default Section;
