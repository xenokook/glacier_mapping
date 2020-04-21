import React, { Component } from 'react';
import { Radio } from 'antd';

class BasemapSelector extends Component {
  render() {
    const { onChange, basemap } = this.props;

    return (
      <Radio.Group onChange={onChange} value={basemap}>
        <Radio value={"ESRI"}>ESRI</Radio>
        <Radio value={"OTM"}>Topographic</Radio>
        <Radio value={"OSM"}>OpenStreetMap</Radio>
      </Radio.Group>
    );
  }
}

export default BasemapSelector;
