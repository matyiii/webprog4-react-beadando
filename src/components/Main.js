import React, { Component } from "react";
import ListCharacters from "./ListCharacters";
import Button from '@mui/material/Button';

class Main extends Component{
    constructor(props){
        super(props)
        this.state = {
            statusFilter: "None"
        }
    }

    setFilterDead = (event) => {
        this.setState({statusFilter:"Dead"})
    }

    setFilterAlive = (event) => {
        this.setState({statusFilter:"Alive"})
    }

    setFilterAll = (event) => {
        this.setState({statusFilter:"None"})
    }

    render(){
        return(
            <>
                <h1 id="title">Rick and Morty Characters</h1>
                <div id="filters">
                    <h2>Status filter</h2>
                    <div id="buttons">
                        <Button variant="contained" onClick={this.setFilterDead}>Dead</Button>
                        <Button variant="contained" onClick={this.setFilterAlive}>Alive</Button>
                        <Button variant="contained" onClick={this.setFilterAll}>All</Button>
                    </div>
                </div>
                <ListCharacters statusFilter={this.state.statusFilter}/>
            </>
        )
    }
}

export default Main;