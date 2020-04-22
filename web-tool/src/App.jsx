import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import './App.css';
import MapDisplay from './Map.jsx';
import BasemapSelector from './BasemapSelector';
import 'leaflet/dist/leaflet.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {basemap: "ESRI", keyPressed: false};
    this.handleBasemapChange = this.handleBasemapChange.bind(this);
    this.handleKeypress = this.handleKeypress.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeypress, false);
    document.addEventListener("keyup", this.handleKeyup, false);
  }

  handleBasemapChange(event) {
    this.setState({basemap: event.target.value});
  }

  handleKeypress(event) {
    if (event.keyCode == 16) {
      this.setState({keyPressed: true});
    }
  }

  handleKeyup(event) {
    this.setState({keyPressed: false});
  }


  render() {
    return (
      <div>
        <div className="Map" onKeyPress={this.handleKeypress} onKeyUp={this.handleKeyup}>
          <MapDisplay basemap={this.state.basemap} keyPressed={this.state.keyPressed}/>
        </div>
        <div className="Select">
          <BasemapSelector basemap={this.state.basemap} onChange={this.handleBasemapChange}/>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
