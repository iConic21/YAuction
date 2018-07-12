import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import Base from './base';

class App extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        window.M.AutoInit();
    }
    
    render() {
        return (
            <div className="App"><Base /></div>
        );
    }
}

export default App;
