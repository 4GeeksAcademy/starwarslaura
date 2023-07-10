import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context)


    return (
    <div className="card carta">
        <img src="https://picsum.photos/200/300"  alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <a href="" className="btn btn-primary">More Info</a>
        </div>
  </div>)
}
Card.propTypes = {
	name: PropTypes.string,
    caracteristicas: PropTypes.object
}
