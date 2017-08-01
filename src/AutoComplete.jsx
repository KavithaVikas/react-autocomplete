import React, { Component } from 'react';

class AutoComplete extends Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        return (
            <div>
            <input type="text"/>
            <button type="button">Search </button>
            </div>
        )
    }
}

export default AutoComplete;