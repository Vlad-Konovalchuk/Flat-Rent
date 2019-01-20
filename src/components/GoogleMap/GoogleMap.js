import React, {PureComponent} from 'react';
import styles from "./GoogleMap.module.scss";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import PropTypes from "prop-types";

export class MapContainer extends PureComponent {
    render() {
        const {properties, activeProperty} = this.props;
        return (
            <Map
                className={styles.mapContainer}
                google={this.props.google}
                zoom={14}
                initialCenter={{
                    lat: activeProperty.latitude,
                    lng: activeProperty.longitude
                }}
            >
                {properties.map(item => (<Marker position={{lat: item.latitude, lng: item.longitude}}/>))}

            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyA9_abOu_dTqGFHeMwAHA1Hf5VheHbpaQ4'
})(MapContainer);