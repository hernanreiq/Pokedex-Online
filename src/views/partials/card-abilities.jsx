import React, { Component } from "react";
import { TransformAbilitiesText } from "../helpers/functions";

class CardAbilities extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card-header">
                    {this.props.abilities.length > 1 ?
                        <h2 className="card-title mb-0 text-center">Abilities</h2> :
                        <h2 className="card-title mb-0 text-center">Ability</h2>
                    }
                </div>
                <div className="card-body p-0 overflow-hidden">
                    <table className="table table-dark mb-0">
                        <tbody>
                            {this.props.abilities.map((pokemon, i) => {
                                return (
                                    <tr key={i}>
                                        <th scope="row">#{i + 1}</th>
                                        <td>{TransformAbilitiesText(pokemon.ability.name)}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </React.Fragment >
        )
    }
}

export default CardAbilities;