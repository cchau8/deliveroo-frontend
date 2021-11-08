import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./assets/deliveroo-logo.png";
import RestaurantHeader from "./components/RestaurantHeader";
import Section from "./components/Section";

function App() {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		try {
			const response = await axios.get("https://deliveroo-backend-cchau.herokuapp.com/");
			setData(response.data);
			setIsLoading(false);
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	return (
		<div>
			<header>
				<div className="header-logo">
					<div className="container">
						<img src={logo} alt="deliveroo-logo" />
					</div>
				</div>
				{isLoading ? "chargement en cours" : <RestaurantHeader data={data} />}
			</header>
			<main>
				{isLoading ? (
					<div>"Chargement en cours...</div>
				) : (
					<div>
						<div className="sections">
							{data.categories
								.filter((el) => {
									return el.meals.length > 0;
								})
								.map((el, i) => {
									return <Section name={el.name} meals={el.meals} key={i} />;
								})}
						</div>
					</div>
				)}
			</main>
		</div>
	);
}

export default App;
