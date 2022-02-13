import React from "react";
import { Component } from "react/cjs/react.production.min";
import "./Lata.css"


class Lata extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">
                    <div className="head">
                    <h1>{this.props.name}</h1>
                    <p>{this.props.honorific}</p>
                    </div>
                    <div className="image">
                        <img src={this.props.image} />
                        <p>{this.props.lived}</p>
                    </div>
                    <div>
                        <ul>
                            <li>1969 - Padma Bhushan</li>
                            <li>1989 - Dada Saheb Phalke Award</li>
                            <li>1999 - Padma Vibhushan</li>
                            <li>2001 - Bharat Ratna</li>
                            <li>2008 - "One Time Award for Lifetime Achievement" honour to commemorate the 60th anniversary of India's independence</li>
                            <li>1972 - National Film Award for Best Female Playback Singer for songs of the film Parichay</li>
                            <li>1974- National Film Award for Best Female Playback Singer for songs of the film Kora Kagaz</li>
                            <li>1990 - National Film Award for Best Female Playback Singer for songs of the film Lekin...</li>
                            <li>1974 - Recorded in the Guinness Book of World Records for having sung the maximum number of songs in the world</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Lata;