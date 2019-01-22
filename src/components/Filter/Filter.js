import React from 'react';
import styles from "../Filter/Filter.module.scss";
import PropTypes from "prop-types";

class Filter extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const {changeFilterVisible, handleFilterChange, clearFilter} = this.props;
        return (
            <form
                ref={e => this.form = e}
                className={styles.filter}>
                <div className={styles.filterBox}>
                    <label htmlFor="filterBedrooms">Bedrooms</label>
                    <select
                        id="filterBedrooms"
                        name="filterBedrooms"
                        onChange={(e) => handleFilterChange(e)}>
                        <option value="any">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div className={styles.filterBox}>
                    <label htmlFor="filterBathrooms">Bathrooms</label>
                    <select
                        id="filterBathrooms"
                        name="filterBathrooms"
                        onChange={(e) => handleFilterChange(e)}>
                        <option value="any">Any</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className={styles.filterBox}>
                    <label htmlFor="filterCars">Car Spaces</label>
                    <select
                        id="filterCars"
                        name="filterCars"
                        onChange={(e) => handleFilterChange(e)}>
                        <option value="any">Any</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <div className={`${styles.filterBox} ${styles.filterFrom}`}>
                    <label htmlFor="priceFrom">Min Price</label>
                    <select id="priceFrom" name="priceFrom" onChange={(e) => handleFilterChange(e)}>
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
                    <select
                        id="priceTo"
                        name="priceTo"
                        onChange={(e) => handleFilterChange(e)}>
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
                    <select
                        id="filterSort"
                        name="filterSort"
                        onChange={(e) => handleFilterChange(e)}>
                        <option value="any">Default</option>
                        <option value="0">Price: - Low to High</option>
                        <option value="1">Price: - High to Low</option>
                    </select>
                </div>
                <div className={styles.filterBox}>
                    <label>&nbsp;</label>
                    <button
                        className={styles["btn-clear"]}
                        onClick={(e) => clearFilter(e,this.form)}
                    >Clear
                    </button>
                </div>
                <button
                    type='button'
                    className={styles["btn-filter"]}
                    onClick={(e) => changeFilterVisible(e)}
                >
                    <strong>X</strong><span>Close</span>
                </button>
            </form>
        )
    }
}

Filter.propTypes = {
    changeFilterVisible: PropTypes.func.isRequired,
    clearFilter: PropTypes.func.isRequired,
    handleFilterChange: PropTypes.func.isRequired
};

export default Filter;