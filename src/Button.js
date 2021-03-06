import React, { Component } from 'react';
import style from './App.css'

class Button extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {
        return (
            <button
                className={this.props.styleButton}
                onClick={this.props.evtButton} >
                {this.props.valueButton}
            </button>
        );
    }
}

export default Button;
