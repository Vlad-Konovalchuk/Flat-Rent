import React from 'react';
import styles from './App.module.scss';
import data from './data/Data'
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Map from "./components/GoogleMap/GoogleMap";

class App extends React.PureComponent {
    state = {
        properties: data.properties,
        activeProperties: data.properties[0]
    };


    render() {
        const {properties, activeProperties} = this.state;
        return (
            <div className={styles.layout}>
                <div className={styles.wrapper}>
                    <Map properties={properties} activeProperty={activeProperties}/>
                </div>
                <div className={styles.listings}>
                    <Header/>
                    <div className={styles.cards}>
                        <div className={styles["cards-list"]}>
                            {properties.map(property => <Card
                                key={property._id}
                                property={property}
                                activeProperty={activeProperties}/>)}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;