import "./App.css";
import "./components/media-queries.css";
import axios from "axios";
import { useState, useEffect } from "react";
import logo from "./assets/deliveroo-logo.png";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section";
import Cart from "./components/Cart/Cart";
// FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import Loading from "./components/Loading";
library.add(faPlus, faMinus, faTimes);

//import des composants

function App() {
	const [data, setData] = useState();
	const [isLoading, setIsLoading] = useState(true);
	const [cart, setCart] = useState([]);
	const [showCart, setShowCart] = useState(false);

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

	useEffect(() => {
		if (cart.length === 0) {
			setShowCart(false);
		}
	}, [cart]);

	return (
		<div>
			<header>
				<div className="header-logo">
					<div className="container">
						<img src={logo} alt="deliveroo-logo" />
					</div>
				</div>
				{isLoading ? <Loading /> : <Hero data={data} />}
			</header>
			<main>
				{isLoading ? (
					<div></div>
				) : (
					<>
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
							<Cart cart={cart} setCart={setCart} mobile={false} />
						</div>

						{showCart && cart.length > 0 && (
							<Cart
								mobile={true}
								cart={cart}
								setCart={setCart}
								showCart={showCart}
								setShowCart={setShowCart}
							/>
						)}

						<button
							className={`mobile-cart${
								cart.length === 0 && !showCart ? " grey" : ""
							}`}
							onClick={() => {
								setShowCart(true);
							}}
						>
							{showCart && cart.length > 0 ? "Valider " : "Voir "}le panier
						</button>
					</>
				)}
			</main>
		</div>
	);
}

export default App;
