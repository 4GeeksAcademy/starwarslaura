import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Card } from "./card.js";

export const CardGroup = props => {
	const { store, actions } = useContext(Context)

    // useEffect(() => {
	// 	actions.getAllCharacters();
	// }, []);
    // console.log(store.characters)
    const personajes=store.characters;
    const planetas=store.planets;
    const vehiculos=store.vehicles;


    return (<div>
        <h1 className="titulo_characters ">Characters</h1>
        <div className="d-inline-flex overflow-x-scroll" >
        {personajes?.map((item)=>
        <Card name={item.name}
            key={item.uid}/>
        )}
        </div>
        <h1 className="titulo_characters ">Planets</h1>
        <div className="d-inline-flex overflow-x-scroll" >
        {planetas?.map((item)=>
        <Card name={item.name}
            key={item.uid}/>
        )}
        </div>
        <div>
        <h1 className="titulo_characters ">Vehicles</h1>
        <div className="d-inline-flex overflow-x-scroll" >
        {vehiculos?.map((item)=>
        <Card name={item.name}
            key={item.uid}/>
        )}
        </div>

    </div>
    </div>)}