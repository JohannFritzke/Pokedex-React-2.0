//eslint-disable
import React from "react";
import './Home.css'

import Card from "../../Components/Card/Card";
import { useEffect, useState } from 'react';
import axios from "axios";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        getPokemons();
    },[pokemons]);

    const getPokemons = async () => {
        var endPoints = [];
        for (var i = 0; i <= 24; i++) {
            if (i > 0) {
                endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
            }
        }
        const responses = await axios.all(
            endPoints.map((endPoint) => axios.get(endPoint))
        );
        setPokemons(responses);
        console.log(pokemons)
    }
    return (
        <div className="main">
            {
                pokemons.map((pokemon, key) => (
                    <Card
                        key={key}
                        nome={pokemon.data.name}
                        img={pokemon.data.sprites.other["official-artwork"].front_default}
                        types={pokemon.data.types}
                        number={pokemon.data.id}
                    />
                ))
            }

        </div>
    )
}

export default Home;