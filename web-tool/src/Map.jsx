import React, { Component } from 'react'
import { Map, TileLayer, Rectangle} from 'react-leaflet'
import dataset from '../conf/dataset.json';
import layerInfo from '../conf/layerInfo.json';
layerInfo["Custom"]["url"] = dataset.basemapLayer.url;
layerInfo["Custom"]["args"] = dataset.basemapLayer.args;

class MapDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: dataset.basemapLayer.initialLocation,
      zoom: dataset.basemapLayer.initialZoom,
      mousePos: dataset.basemapLayer.initialLocation
    };
    this.handleMove = this.handleMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleMove(event) {
    this.setState({mousePos: event.latlng})
  }

  handleClick(event) {
    if (this.state.keyPressed) {
      console.log("hello")
      // do inference
    }
  }

  render() {
    const { basemap, keyPressed } = this.props,
          { mousePos } = this.state,
          info = layerInfo[basemap];

    let rect = [];
    if (keyPressed) {
      const bounds = [[mousePos.lat - .1, mousePos.lng - .1], [mousePos.lat + .1, mousePos.lng + .1]];
      rect.push(<Rectangle bounds={bounds} key="rect"/>);
    }

    return (
      <Map center={this.state.center} crs={L.CRS.EPSG3857}
           zoom={this.state.zoom} style={{height: "450px"}}
           onMouseMove={this.handleMove} onClick={this.handleClick}>
        {rect}
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
