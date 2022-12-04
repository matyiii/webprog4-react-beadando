import React, { Component } from "react";
import {RxDotFilled} from "react-icons/rx";
import RandomNumberFact from './RandomNumberFact';

class Character extends Component{
    render(){
        const value = this.props.value;
        const name = this.props.name;
        const image = this.props.image;
        const specie = this.props.specie;
        const gender = this.props.gender;
        const status = this.props.status;

        return(
            <article key={value} className="charArticle">
                <div>
                    <img src={image} alt={name}></img>
                </div>
                <div id="data">
                    <h3>Name: {name}</h3>
                    <p><RxDotFilled/>Specie: {specie}</p>
                    <p><RxDotFilled/>Gender: {gender}</p>
                    <p><RxDotFilled/>Status: {status}</p>
                    <RandomNumberFact/>
                </div>
            </article>
        )
    }
}

export default Character;