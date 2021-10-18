import React, { Component } from "react";
import CardPokemon from "./partials/card-pokemon";
import CardTypes from "./partials/card-types";
import CardStatistics from "./partials/card-statistics";
import CardAbilities from "./partials/card-abilities";
import { GetPokemon } from "./helpers/axios-http";
import { RainingPokeballs } from "./helpers/functions";

class Index extends Component {
    state = {
        err: false,
        messageError: 'This pokémon does not exist',
        pokemon: {},
        searched: false
    }

    nameIdPokemonRef = React.createRef();

    searchPokemon = () => {
        var nameId = (this.nameIdPokemonRef.current.value).toLowerCase();
        this.nameIdPokemonRef.current.value = '';
        if (nameId){
            var pokemon = GetPokemon(nameId);
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
        } else {
            this.setState({
                err: false,
                searched: false
            })
        }
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
                    <div id="snow-flakes">
                        {RainingPokeballs(10)}
                    </div>
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
                                <div className="col-md-6">
                                    <CardPokemon
                                        name={this.state.pokemon.name}
                                        id={this.state.pokemon.id}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <CardTypes types={this.state.pokemon.types} />
                                    <CardStatistics stats={this.state.pokemon.stats} />
                                    <CardAbilities abilities={this.state.pokemon.abilities} />
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