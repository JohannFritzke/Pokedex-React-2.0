import React from "react";
import './Home.css'

import Card from "../../Components/Card/Card";
const Home = () => {
    const nome="Nome"
    return (
        <main>
            <Card nome={nome}/>
        </main>
    )
}

export default Home;