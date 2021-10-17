import React, { Component } from "react";

class CardPokemon extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card shadow">
                    <div className="card-header">
                        <h2 className="card-title mb-0 text-center">Bulbasaur</h2>
                    </div>
                    <div className="card-body">
                        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Bulbasaur" className="card-img" />
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default CardPokemon;