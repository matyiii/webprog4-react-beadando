import React, { Component } from "react";
import Button from '@mui/material/Button';

class RandomNumberFact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fact: '',
            click: false
        }
    }
    getRandomFact() {
        const METHOD = 'GET';
        const rnd = Math.floor(Math.random() * (100 - 1) + 0);
        const URL = 'http://numbersapi.com/' + rnd;
        fetch(URL, { method: METHOD })
            .then((response) => response.text())
            .then((data) => {
                this.setState({ fact: data });
            })
    }

    buttonClick = () => {
        this.getRandomFact()
        this.setState(
            { click: true }
        )
    }

    render() {
        return (
            <div id="fact">
                {this.state.click && <p>{this.state.fact}</p>}
                {!this.state.click && <Button variant="contained" id="rnd" onClick={this.buttonClick}>Random Number Fact</Button>}
            </div>
        );
    }
}

export default RandomNumberFact;