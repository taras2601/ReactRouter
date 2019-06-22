import React, { Component } from 'react';
import Counter from './Counter';

export default class CounterContainer extends Component {
    state = {
        countPlus: 0,
        countMinus: 0,
    };

    handleClickMinus = () => {
        this.setState( prevState => ({
            countMinus: prevState.countMinus - 1
        }));
    };
    
    handleClickPlus = () => {
        this.setState( prevState => ({
            countPlus: prevState.countPlus + 1
        }));
    };

    render() {
        return (
            <div>
                <Counter
                    countPlus = {this.state.countPlus}
                    countMinus = {this.state.countMinus}
                    handleClickMinus = {this.handleClickMinus}
                    handleClickPlus = {this.handleClickPlus}
                />
            </div>
        );
    };
}
