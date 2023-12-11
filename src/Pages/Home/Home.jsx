//eslint-disable
import React from "react";
import './Home.css'

import Card from "../../Components/Card/Card";
import { useEffect, useState } from 'react';
import axios from "axios";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const limit = 1010
    useEffect(() => {
        getPokemons();
    }, [offset]);



    const getPokemons = async () => {
        var limit = 100;
        if (offset >= 1000) {
            limit = 10
        }
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
        const newPokemons = await Promise.all(response.data.results.map(pokemon => axios.get(pokemon.url)));
        setPokemons([...pokemons, ...newPokemons]);
    };
    const handleLoadMore = () => {
        setOffset(offset + 100);
    };
    return (
        <div className="main">
            <div className="cards">
                {
                    pokemons.map((pokemon, key) => (
                        <Card
                            key={key}
                            nome={pokemon.data.name}
                            img={pokemon.data.sprites.other["official-artwork"].front_default}
                            types={pokemon.data.types}
                            number={pokemon.data.id}
                            className="card"
                        />
                    ))
                }
            </div>
            {pokemons.length < limit && (
                <div className="load-more-container">
                    <button onClick={handleLoadMore}>Carregar Mais</button>
                </div>
            )}
        </div>
    )
}

export default Home;