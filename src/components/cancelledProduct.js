import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                product cancelled ???
                <br/>
                <Link to="/">Go to add project page.</Link>
            </div>

        );
    }
}
