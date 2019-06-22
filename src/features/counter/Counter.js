import React, { Component } from 'react';

export default class Counter extends Component {
    render() {
        const {countPlus, countMinus, handleClickPlus, handleClickMinus} = this.props;
        return (
            <div>
                <button onClick = {handleClickPlus}>{countPlus}</button>
                <button onClick = {handleClickMinus}>{countMinus}</button>
            </div>
        );
    };
}
