import React, { Component } from 'react'

export class Prop extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.lastname}, {this.props.firstname}</h1>
                <p>Age: {this.props.age}</p>
                <p>Hair Color: {this.props.haircolor}</p>
            </div>
        )
    }
}

export default Prop