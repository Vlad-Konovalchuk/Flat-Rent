import React from 'react';
import image from "../../images/house-location-pin.svg";
import styles from './Header.module.scss';
import Filter from "../Filter/Filter";

const Header = ({filterIsVisible, toggleFilter,handleFilterChange,clearFilter}) => (
    <header className={filterIsVisible ? `${styles['filter-is-visible']} ${styles.header}` : `${styles.header}`}>
        {filterIsVisible && <Filter
            changeFilterVisible={toggleFilter}
            handleFilterChange={handleFilterChange}
            clearFilter={clearFilter}
        />}
        <img src={image} className={styles.img} alt="Logo Picture"/>
        <h1 className={styles.title}>Property Listings</h1>
        <button className={styles["btn-filter"]} onClick={(e) => toggleFilter(e)}>Filter</button>
    </header>
);


export default Header;