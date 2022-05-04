import React, { Component } from 'react'

export class Prop extends Component {

    // Declare const to override our default const so we can initially set the state obj
    constructor(props){
        // gives us all the functionality of the default const that comes w Component
        super(props);
        this.state = {
            age: this.props.age
        }

    }

    render() {
        const {firstname, lastname, haircolor} = this.props;
        return (
            <div>
                <h1>{lastname}, {firstname}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {haircolor}</p>
                <button onClick={ ()=> this.setState({age: this.state.age+1}) }>Birthday Button for {firstname} {lastname}</button>
            </div>
        )
    }
}

export default Prop