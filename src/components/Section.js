import React from "react";
import Meal from "./Meal";
const Section = ({ name, meals }) => {
	return (
		<section className="container">
			<h2>{name}</h2>
			<ul>
				{meals.map((el, i) => {
					return (
						<Meal
							key={meals[i].id}
							title={meals[i].title}
							description={meals[i].description}
							price={meals[i].price}
							image={meals[i].picture}
							popular={meals[i].popular}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default Section;
