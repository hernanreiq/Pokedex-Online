import React, { Component } from "react";
import { CapitalizeFirstLetter, PokemonImage, ColStyles } from "../helpers/functions";

class CardTypes extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card shadow rounded overflow-hidden mb-4">
                    <div className="card-header">
                        <h2 className="card-title mb-0 text-center">Type</h2>
                    </div>
                    <div className="card-footer text-center">
                        <div className="row">
                            {this.props.types.map((pokemon, i) => {
                                return (
                                    <React.Fragment key={i}>
                                        <div className={ColStyles(this.props.types.length) + ' mx-auto my-2'}>
                                            <img src={PokemonImage(CapitalizeFirstLetter(pokemon.type.name))} alt={CapitalizeFirstLetter(pokemon.type.name)} /> <br />
                                            <h4 className="mb-0"><span className="badge badge-dark">{CapitalizeFirstLetter(pokemon.type.name)}</span></h4>
                                        </div>
                                    </React.Fragment>
                                )
                            })
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default CardTypes;