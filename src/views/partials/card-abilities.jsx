import React, { Component } from "react";
import { TransformTextStrings } from "../helpers/functions";

class CardAbilities extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card shadow rounded overflow-hidden">
                    <div className="card-header">
                        {this.props.abilities.length > 1 ?
                            <h2 className="card-title mb-0 text-center">Abilities</h2> :
                            <h2 className="card-title mb-0 text-center">Ability</h2>
                        }
                    </div>
                    <div className="card-footer text-center overflow-hidden">
                        <h4 className="mb-0">
                            {this.props.abilities.map((pokemon, i) => {
                                return (
                                    <span className="badge badge-dark mx-1" key={i}>
                                        {TransformTextStrings(pokemon.ability.name)}
                                    </span>
                                )
                            })
                            }
                        </h4>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default CardAbilities;