import React, { Component } from "react";
import { CapitalizeFirstLetter } from "../helpers/functions";

class CardTypes extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card-footer text-center">
                    <h5 className="mb-0">Type:
                        {this.props.types.map((pokemon, i) => {
                            return(
                                <span className="badge badge-dark ml-1" key={i}>{CapitalizeFirstLetter(pokemon.type.name)}</span>
                            )
                        })
                        }
                    </h5>
                </div>
            </React.Fragment >
        )
    }
}

export default CardTypes;