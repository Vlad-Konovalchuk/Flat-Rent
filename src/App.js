import React from 'react';
import styles from './App.module.scss';
import data from './data/Data'
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import MapContainer from "./components/GoogleMap/GoogleMap";

class App extends React.PureComponent {
    state = {
        properties: data.properties,
        activeProperties: data.properties[0],
        filterIsVisible: false,
    };
    toggleFilter = (e) => {
        e.preventDefault();
        this.setState({
            filterIsVisible: !this.state.filterIsVisible
        })
    };
    changeActiveProperty = (item) => {
        this.setState({activeProperties: item})
    };
    handleFilterChange = (e) => {
        const target = e.target;
        console.log(target.name, target.value)
    };

    render() {
        const {properties, activeProperties, filterIsVisible} = this.state;
        return (
            <div className={styles.layout}>
                <MapContainer properties={properties} activeProperty={activeProperties}/>
                <div className={styles.listings}>
                    <Header
                        filterIsVisible={filterIsVisible}
                        toggleFilter={this.toggleFilter}
                        handleFilterChange={this.handleFilterChange}
                    />
                    <div className={styles.cards}>
                        <div className={styles["cards-list"]}>
                            {properties.map(property => <Card
                                key={property._id}
                                property={property}
                                activeProperty={activeProperties}
                                handleChange={this.changeActiveProperty}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;