import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import * as d3 from 'd3';
import BubbleChart from '@weknow/react-bubble-chart-d3';

class App extends Component {

  getArticles = url => {
    axios.get(url).then(response => console.log(response));
    };

  componentDidMount() {
    this.getArticles('https://api.ozae.com/gnw/article/142453821?key=8dff35cfd68b48be8dff4c6a2d0fb3ac');



  }


  render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
            </header>
            <h1 className="App-intro">Example of 'react-bubble-chart-d3' Component.</h1>
            <br />
            <BubbleChart
                width={800}
                height={800}
                fontFamily="Arial"
                data={[
                    { label: 'CRM', value: 1 },
                    { label: 'API', value: 1 },
                    { label: 'Data', value: 1 },
                    { label: 'Commerce', value: 1 },
                    { label: 'AI', value: 3 },
                    { label: 'Management', value: 5 },
                    { label: 'Testing', value: 6 },
                    { label: 'Mobile', value: 9 },
                    { label: 'Conversion', value: 9 },
                    { label: 'Misc', value: 21 },
                    { label: 'Databases', value: 22 },
                    { label: 'DevOps', value: 22 },
                    { label: 'Javascript', value: 23 },
                    { label: 'Languages / Frameworks', value: 25 },
                    { label: 'Front End', value: 26 },
                    { label: 'Content', value: 26 },{ label: 'API', value: 1 },
                    { label: 'Data', value: 1 },
                    { label: 'Commerce', value: 1 },
                    { label: 'AI', value: 3 },
                    { label: 'Management', value: 5 },
                    { label: 'Testing', value: 6 },
                    { label: 'Mobile', value: 9 },
                    { label: 'Conversion', value: 9 },
                    { label: 'Misc', value: 21 },
                    { label: 'Databases', value: 22 },

                ]}
            />
        </div>

    );

  }
}

export default App;
