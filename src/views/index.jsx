import React, { Component } from "react";
import CardPokemon from "./partials/card-pokemon";

class Index extends Component {
    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 mb-5">
                                <div className="input-group flex-nowrap rounded overflow-hidden shadow">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-danger text-light">Pokémon</span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="Name or ID" autoFocus aria-describedby="addon-wrapping" />
                                    <div className="input-group-prepend">
                                        <button className="btn btn-dark">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <CardPokemon />
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Index;