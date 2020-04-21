import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import dataset from '../conf/dataset.json';

const layerUrls = {
  "ESRI": "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  "OTM": "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
  "OSM": "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
}


class MapDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: dataset.basemapLayer.initialLocation,
      zoom: dataset.basemapLayer.initialZoom
    };
  };

  render() {
    const { basemap } = this.props;
    return (
      <Map center={this.state.center} crs={L.CRS.EPSG3857} zoom={this.state.zoom} style={{height : '400px'}}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={layerUrls[basemap]}
          />
      </Map>
    );
  }
}

export default MapDisplay;

// url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
