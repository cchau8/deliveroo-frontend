import React from "react";
import "./Loading.css";
const Loading = () => {
	return (
		<div className="loading">
			<div class="lds-ring">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<span>Chargement en cours...</span>
		</div>
	);
};

export default Loading;
