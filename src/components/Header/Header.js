import React from 'react';
import image from "../../images/house-location-pin.svg";
import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <form className={styles.filter}>
            <div className={styles.filterBox}>
                <label htmlFor="filterBedrooms">Bedrooms</label>
                <select id="filterBedrooms" name="filterBedrooms">
                    <option value="any">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>
            <div className={styles.filterBox}>
                <label htmlFor="filterBathrooms">Bathrooms</label>
                <select id="filterBathrooms" name="filterBathrooms">
                    <option value="any">Any</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className={styles.filterBox}>
                <label htmlFor="filterCars">Car Spaces</label>
                <select id="filterCars" name="filterCars">
                    <option value="any">Any</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
            </div>
            <div className={`${styles.filterBox} ${styles.filterFrom}`}>
                <label htmlFor="priceFrom">Min Price</label>
                <select id="priceFrom" name="priceFrom">
                    <option value="0">Any</option>
                    <option value="500000">{500000}</option>
                    <option value="600000">{600000}</option>
                    <option value="700000">{700000}</option>
                    <option value="800000">{800000}</option>
                    <option value="900000">{900000}</option>
                </select>
            </div>
            <div className={styles.filterBox}>
                <label htmlFor="priceTo">Max Price</label>
                <select id="priceTo" name="priceTo">
                    <option value="1000001">Any</option>
                    <option value="600000">{600000}</option>
                    <option value="700000">{700000}</option>
                    <option value="800000">{800000}</option>
                    <option value="900000">{900000}</option>
                    <option value="1000000">{1000000}</option>
                </select>
            </div>
            <div className={styles.filterBox}>
                <label htmlFor="filterSort">Order by</label>
                <select id="filterSort" name="filterSort">
                    <option value="any">Default</option>
                    <option value="0">Price: - Low to High</option>
                    <option value="1">Price: - High to Low</option>
                </select>
            </div>
            <div className={styles.filterBox}>
                <label>&nbsp;</label>
                <button className={styles["btn-clear"]}>Clear</button>
            </div>
            <button className={styles["btn-filter"]}><strong>X</strong><span>Close</span></button>
        </form>

        <img src={image} className={styles.img}/>
        <h1 className={styles.title}>Property Listings</h1>
        <button className={styles["btn-filter"]}>Filter</button>
    </header>
);


export default Header;