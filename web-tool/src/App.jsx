import { hot } from 'react-hot-loader';
import React, { Component } from 'react';
import './App.css';
import MapDisplay from './Map.jsx';
import BasemapSelector from './BasemapSelector';
import 'leaflet/dist/leaflet.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {basemap: "ESRI"}
    this.handleBasemapChange = this.handleBasemapChange.bind(this);
  }

  handleBasemapChange(event) {
    this.setState({basemap: event.target.value});
  }

  render() {
    return (
      <div>
        <div className="Map">
          <MapDisplay basemap={this.state.basemap}/>
        </div>
        <div className="Select">
          <BasemapSelector basemap={this.state.basemap} onChange={this.handleBasemapChange}/>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
