import React, { Component } from "react";
import CardPokemon from "./partials/card-pokemon";
import CardStatistics from "./partials/card-statistics";
import { GetPokemon } from "./helpers/axios-http";

class Index extends Component {
    state = {
        err: false,
        messageError: 'This pokémon does not exist',
        pokemon: {},
        searched: false
    }

    nameIdPokemonRef = React.createRef();

    searchPokemon = () => {
        var nameId = this.nameIdPokemonRef.current.value;
        var pokemon = GetPokemon(nameId)
        pokemon.then(res => {
            if (!res.err) {
                this.setState({
                    err: false,
                    pokemon: res.data,
                    searched: true
                });
            } else {
                this.setState({
                    err: true,
                    searched: false
                });
            }
        })
    }

    enterKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.searchPokemon();
        }
    }

    render() {
        return (
            <React.Fragment>
                <main>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 my-5">
                                <div className="input-group flex-nowrap rounded overflow-hidden shadow">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text bg-danger text-light">Pokémon</span>
                                    </div>
                                    <input ref={this.nameIdPokemonRef} onKeyDown={this.enterKeyDown} type="text" className="form-control" placeholder="Name or ID" autoFocus aria-describedby="addon-wrapping" />
                                    <div className="input-group-prepend">
                                        <button className="btn btn-dark" onClick={this.searchPokemon}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.state.err &&
                            <h2 className="text-center">{this.state.messageError}</h2>
                        }
                        {this.state.searched &&
                            <div className="row">
                                <div className="col-md-6 mb-5">
                                    <CardPokemon
                                        photo={this.state.pokemon.sprites.front_default}
                                        name={this.state.pokemon.name}
                                        id={this.state.pokemon.id}
                                        types={this.state.pokemon.types}
                                    />
                                </div>
                                <div className="col-md-6 mb-5">
                                    <CardStatistics
                                        stats={this.state.pokemon.stats}
                                        abilities={this.state.pokemon.abilities}
                                    />
                                </div>
                            </div>
                        }
                    </div>
                </main>
            </React.Fragment>
        )
    }
}

export default Index;