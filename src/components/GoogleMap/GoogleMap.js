import React, {PureComponent} from 'react';
import styles from "./GoogleMap.module.scss";
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import PropTypes from "prop-types";


export class MapContainer extends PureComponent {
    state = {
        center: {
            lat: 40.7831,
            lng: -73.9712
        },
        zoom: 18,
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };
    onMarkerClick = (props, marker, e) => {
        console.log('clicked marker');
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true,

        })
    };

    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };
    onInfoWindowClose = () => {
        this.setState({
            showingInfoWindow: false,
            activeMarker: null
        })
    };

    render() {
        const {properties, activeProperty, isFiltering, filteredProperties} = this.props;
        const style = {
            width: '49vw',
            height: '100vh',
            'marginLeft': 'auto',
            'marginRight': 'auto'
        };

        return (
            <div className={styles.wrapper}>
                <Map
                    item
                    m={18}
                    style={style}
                    google={this.props.google}
                    zoom={15}
                    initialCenter={{
                        lat: activeProperty.latitude,
                        lng: activeProperty.longitude
                    }}
                    onClick={this.onMapClick}

                >
                    {properties.map(item => (
                            <Marker key={item._id}
                                    position={{lat: item.latitude, lng: item.longitude}}
                                    onClick={this.onMarkerClick}
                                    name={item._id}
                                    title={item.address}

                            />
                    ))}
                    {/*<InfoWindow*/}
                        {/*// onOpen={this.onMarkerClick}*/}
                        {/*// onClose={this.onInfoWindowClose()}*/}
                        {/*visible={this.state.showingInfoWindow}>*/}
                        {/*<div style={style}>*/}
                            {/*<h1>Hell oworld</h1>*/}
                        {/*</div>*/}
                    {/*</InfoWindow>*/}
                </Map>
            </div>
        );
    }
}

MapContainer
    .propTypes = {
    properties: PropTypes.array.isRequired,
    activeProperty: PropTypes.object.isRequired,
    filteredProperties: PropTypes.array.isRequired,
    isFiltering: PropTypes.bool.isRequired
};
export default GoogleApiWrapper({
    apiKey: 'AIzaSyA9_abOu_dTqGFHeMwAHA1Hf5VheHbpaQ4'
})

(
    MapContainer
)
;