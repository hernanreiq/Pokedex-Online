import React, { Component } from "react";

class CardPokemon extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-4 offset-md-4 mb-5">
                        <div className="card shadow">
                            <div className="card-header">
                                <h2 className="card-title mb-0 text-center">Bulbasaur</h2>
                            </div>
                            <div className="card-body">
                                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="Bulbasaur" className="card-img" />
                            </div>
                            <div className="card-footer p-0 overflow-hidden">
                                <table className="table table-dark mb-0">
                                    <tbody>
                                        <tr>
                                            <th scope="row">HP</th>
                                            <td>100</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Attack</th>
                                            <td>15</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Defense</th>
                                            <td>30</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Special Attack</th>
                                            <td>25</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Special Defense</th>
                                            <td>45</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Speed</th>
                                            <td>20</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default CardPokemon;