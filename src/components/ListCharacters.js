import React, { Component } from "react";
import './App.css';
import Character from "./Character";

class ListCharacters extends Component{
    constructor(props){
        super(props)
        this.state = {
            characters: {}
        }
    }

    static defaultProps ={
        statusFilter: "none"
    }

    getAllCharacter(){
        const METHOD = 'GET';
        const URL = 'https://rickandmortyapi.com/api/character'
        fetch(URL, {method:METHOD})
            .then((response) => {
                if(response.status !== 200)
                    throw new Error('Sikertelen GET kérés (' + response.status + ')');
                return response.json();
            })
            .then((data) => {
                this.setState({characters: data.results});
            })
    }

    componentDidMount(){
        this.getAllCharacter();
    }

    render(){
        let statusFilter = this.props.statusFilter;
        return(
            <>
            <div className="charList">
            {
                Object.keys(this.state.characters).map(
                    (value,index) => {
                        if(statusFilter === "None"){
                            return (<Character
                            key={this.state.characters[value].id}
                            name={this.state.characters[value].name}
                            image={this.state.characters[value].image}
                            specie={this.state.characters[value].species}
                            gender={this.state.characters[value].gender}
                            status={this.state.characters[value].status}
                        />)
                        }
                        else if(statusFilter === "Alive"){
                            if(this.state.characters[value].status === statusFilter){
                                return (<Character
                                key={this.state.characters[value].id}
                                name={this.state.characters[value].name}
                                image={this.state.characters[value].image}
                                specie={this.state.characters[value].species}
                                gender={this.state.characters[value].gender}
                                status={this.state.characters[value].status}
                            />)
                            }
                        }
                        else{
                            if(this.state.characters[value].status === statusFilter){
                                return (<Character
                                key={this.state.characters[value].id}
                                name={this.state.characters[value].name}
                                image={this.state.characters[value].image}
                                specie={this.state.characters[value].species}
                                gender={this.state.characters[value].gender}
                                status={this.state.characters[value].status}
                            />)
                            }
                        }
                        return null;
                    }
                )
            }
            </div>
            </>
        )
    }
}

export default ListCharacters;