import React from 'react';
import styles from './Card.module.scss'
import PropTypes from 'prop-types';

const Card = ({property, activeProperty, handleChange}) => (
    <div id="card-1"
         className={property === activeProperty ? `${styles.card} ${styles.active}` : `${styles.card}`}
         onClick={() => handleChange(property)}>
        <img src={property.picture}
             alt="{property.address}"/>
        <p className={styles.price}>{property.price}</p>
        <div className={styles.details}>
            <span className={styles.index}>2</span>
            <p className={styles.location}>
                {property.city}<br/>{property.address}
            </p>
            <ul className={styles.features}>
                <li className={styles["icon-bed"]}>{property.bedrooms}<span>bedrooms</span></li>
                <li className={styles["icon-bath"]}>{property.bathrooms}<span>bathrooms</span></li>
                <li className={styles["icon-car"]}>{property.carSpaces}<span>parking spots</span></li>
            </ul>
        </div>
    </div>
);
Card.propTypes = {
    property: PropTypes.exact({
        _id: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        picture: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        bedrooms: PropTypes.number.isRequired,
        bathrooms: PropTypes.number.isRequired,
        carSpaces: PropTypes.number.isRequired
    }),
    activeProperty: PropTypes.exact({
        _id: PropTypes.string.isRequired,
        index: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        picture: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        bedrooms: PropTypes.number.isRequired,
        bathrooms: PropTypes.number.isRequired,
        carSpaces: PropTypes.number.isRequired
    }),
    handleChange: PropTypes.func.isRequired
};

export default Card;