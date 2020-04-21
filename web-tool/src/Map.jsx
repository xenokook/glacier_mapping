import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import dataset from '../conf/dataset.json';
import layerInfo from '../conf/layerInfo.json';
layerInfo["Custom"]["url"] = dataset.basemapLayer.url;
layerInfo["Custom"]["args"] = dataset.basemapLayer.args;

class MapDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: dataset.basemapLayer.initialLocation,
      zoom: dataset.basemapLayer.initialZoom
    };
  };

  render() {
    const { basemap } = this.props,
          info = layerInfo[basemap];

    return (
      <Map center={this.state.center} crs={L.CRS.EPSG3857} zoom={this.state.zoom} style={{height: "450px"}}>
        <TileLayer
          attribution={info.args.attribution}
          url={info.url}
          maxZoom={info.args.maxZoom}
          minZoom={info.args.minZoom}
          />
      </Map>
    );
  }
}

export default MapDisplay;
