import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./assets/deliveroo-logo.png";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section";
import Cart from "./components/Cart/Cart";
// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus);

//import des composants

function App() {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [cart, setCart] = useState([]);

	// Récupération des données du restaurant
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

	// Fonctions pour le click de l'ajout au panier
	const addToCart = (id, title, price) => {
		const newCart = [...cart];
		if (newCart.some((el) => el.id === id)) {
			const index = newCart.findIndex((el) => el.id === id);
			newCart[index].quantity++;
		} else {
			newCart.push({
				id: id,
				title: title,
				price: price,
				quantity: 1,
			});
		}
		setCart(newCart);
	};

	return (
		<div>
			<header>
				<div className="header-logo">
					<div className="container">
						<img src={logo} alt="deliveroo-logo" />
					</div>
				</div>
				{isLoading ? "chargement en cours" : <Hero data={data} />}
			</header>
			<main>
				{isLoading ? (
					<div>"Chargement en cours...</div>
				) : (
					<div className="container">
						<div className="sections ">
							{data.categories
								.filter((el) => {
									return el.meals.length > 0;
								})
								.map((el, i) => {
									return (
										<Section
											name={el.name}
											meals={el.meals}
											key={i}
											addToCart={addToCart}
										/>
									);
								})}
						</div>
						<Cart cart={cart} setCart={setCart} />
					</div>
				)}
			</main>
		</div>
	);
}

export default App;
