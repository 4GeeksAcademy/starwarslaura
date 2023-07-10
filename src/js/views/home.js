import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardGroup } from "../component/cardgroup.js";


export const Home = () =>{
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({

	});

	useEffect(() => {
		actions.getAllCharacters();
	}, []);

return (
	<div className="text-center mt-5">
		<CardGroup></CardGroup>
	</div>
)
}