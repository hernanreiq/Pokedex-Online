import React, { Component } from "react";
import { CapitalizeFirstLetter } from "../helpers/functions";

class CardPokemon extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card shadow">
                    <div className="card-header">
                        <h2 className="card-title mb-0 text-center">{CapitalizeFirstLetter(this.props.name)} <span className="badge badge-light text-danger">{this.props.id}</span></h2>
                    </div>
                    <div className="card-body">
                        <img src={this.props.photo} alt={this.props.name} className="card-img" />
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default CardPokemon;