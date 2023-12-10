import React from "react";
import "./Card.css"
import axios from "axios";

const Card = ({ nome, number, img, types }) => {

    const typesHandler = () => {
        if (types[1]) {
            return (
                <div className="types">
                    <p className={`type1 ${types[0].type.name}`}>{types[0].type.name}</p>
                    <p className={`type2 ${types[1].type.name}`}>{types[1].type.name}</p>
                </div>
            );
        } else {
            return (
                <div className="types">
                    <p className={`type1 ${types[0].type.name}`}>{types[0].type.name}</p>
                </div>
            );
        }
    }
    const shiny = (id) => {
        var shiny = document.getElementById(id);

        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((resp) => {
                if (shiny.src.includes("shiny")) {
                    shiny.src = resp.data.sprites.other["official-artwork"].front_default;
                }

                else if (resp.data.sprites.other["official-artwork"].front_shiny != null) {
                    shiny.src = resp.data.sprites.other["official-artwork"].front_shiny;
                }
            });
    }
    return (
        <div className={`container ${types[0].type.name}`}>
            <div className="top-infos">
                <i class='bx bxs-star' onClick={() => shiny(number)}></i>
                <p className="number">{`#${number}`}</p>
            </div>

            <div className="poke-img">
                <img src={img} alt="" id={number} />
            </div>
            <h5>{nome}</h5>
            {typesHandler()}
        </div>
    )
}

export default Card;