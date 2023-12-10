import React from "react";
import "./Card.css"
import img from "./1.png"
const Card = ({nome}) => {

    return (
        <div className="container">
            <p>{`#${nome}`}</p>
            <i class='bx bxs-star'></i>
            <img src={img} alt="" />
            <h5>Nome</h5>
            <div>
                <p>Type1</p>
                <p>Type2</p>
            </div>
        </div>
    )
}

export default Card;