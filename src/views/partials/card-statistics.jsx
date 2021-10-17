import React, { Component } from "react";

class CardStatistics extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="card shadow">
                    <div className="card-header">
                        <h2 className="card-title mb-0 text-center">Statistics</h2>
                    </div>
                    <div className="card-body p-0 overflow-hidden">
                        <table className="table table-dark mb-0">
                            <tbody>
                                <tr>
                                    <th scope="row">HP</th>
                                    <td>{this.props.stats[0].base_stat}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Attack</th>
                                    <td>{this.props.stats[1].base_stat}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Defense</th>
                                    <td>{this.props.stats[2].base_stat}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Special Attack</th>
                                    <td>{this.props.stats[3].base_stat}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Special Defense</th>
                                    <td>{this.props.stats[4].base_stat}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Speed</th>
                                    <td>{this.props.stats[5].base_stat}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default CardStatistics;