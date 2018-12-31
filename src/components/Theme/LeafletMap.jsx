import React, { Component } from 'react';

import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [33.4468, -112.0739];
const zoomLevel = 12;

class LeafletMap extends Component {
    state = { currentZoomLevel: zoomLevel };

    componentDidMount() {
        const leafletMap = this.leafletMap.leafletElement;
        leafletMap.on('zoomend', () => {
            const updatedZoomLevel = leafletMap.getZoom();
            this.handleZoomLevelChange(updatedZoomLevel);
        });
    }

    handleZoomLevelChange(newZoomLevel) {
        this.setState({ currentZoomLevel: newZoomLevel });
    }

    mapThemeChange(theme) {
        switch(theme) {
            case 'Primary':
                return 'https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png';
            case 'Danger':
                return 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}';
            case 'Success':
                return 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png';
            default:
                return 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
        }
    }

    render() {
        const theme = this.props.theme;

        window.console.log('this.state.currentZoomLevel ->',
        this.state.currentZoomLevel);

        return (
            <div>
                <Map
                    ref={m => { this.leafletMap = m; }}
                    center={mapCenter}
                    zoom={zoomLevel}
                >
                <TileLayer
                    attribution={stamenTonerAttr}
                    url={this.mapThemeChange(theme)}
                />
                </Map>
            </div>
        );
    }
};

export default LeafletMap;
