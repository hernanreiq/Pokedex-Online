import React, { Component } from "react";
import { CapitalizeFirstLetter } from "../helpers/functions";

class CardPokemon extends Component {
    state = {
        image: ''
    }

    updateImage = (pokemonId) => {
        this.setState({
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
        })
    }

    componentDidMount() {
        this.updateImage(this.props.id);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.id !== this.props.id) {
            this.updateImage(this.props.id);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="card shadow rounded overflow-hidden mb-4">
                    <div className="card-header">
                        <h2 className="card-title mb-0 text-center">{CapitalizeFirstLetter(this.props.name)} <span className="badge badge-light text-danger">{this.props.id}</span></h2>
                    </div>
                    <div className="card-body">
                        <img src={this.state.image} alt={this.props.name} className="card-img" />
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default CardPokemon;