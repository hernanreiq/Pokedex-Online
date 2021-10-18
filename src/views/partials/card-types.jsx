import React, { Component } from "react";
import { CapitalizeFirstLetter } from "../helpers/functions";

class CardTypes extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card shadow rounded overflow-hidden mb-4">
                    <div className="card-header">
                        <h2 className="card-title mb-0 text-center">Type</h2>
                    </div>
                    <div className="card-footer text-center">
                        <h4 className="mb-0">
                            {this.props.types.map((pokemon, i) => {
                                return (
                                    <span className="badge badge-dark ml-1" key={i}>{CapitalizeFirstLetter(pokemon.type.name)}</span>
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

export default CardTypes;