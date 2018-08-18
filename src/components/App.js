import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';

class App extends React.Component {

    static propTypes = {
        match: PropTypes.object
    };

    /* Initialize State */
    state = {
        fishes: {},
        order: {}
    };

    /* Add Fish to State function */
    addFish = fish => {
        //STEPS TO ADDING TO STATE
        //1. take copy of existing state
        const newFishes = {...this.state.fishes};
        //2. add new fish
        newFishes[`fish${Date.now()}`] = fish;
        //3. set new fishes object to state
        this.setState({
            fishes: newFishes
        });
    };

    /* Update fish function */
    updateFish = (key, newFish) => {
        //STEPS TO ADDING TO STATE
        //1. take copy of existing state
        const newFishes = {...this.state.fishes};
        //2. update fish
        newFishes[key] = newFish;
        //3. set new fishes object to state
        this.setState({
            fishes: newFishes
        });
    };

    /* Delete Fish from Menu function */
    deleteFish = key => {
        //STEPS TO ADDING TO STATE
        //1. take copy of existing state
        const newFishes = {...this.state.fishes};
        //2. remove fish
        delete newFishes[key];
        //3. set new fishes object to state
        this.setState({
            fishes: newFishes
        });
    };

    /* Load Sample Fishes function */
    loadSampleFishes = () => {
        this.setState({
            fishes: sampleFishes
        });
    };

    /* Add Fish to Order function */
    addToOrder = key => {
        //STEPS TO ADDING TO STATE
        //1. take copy of existing state
        const newOrder = {...this.state.order};
        //2. add to order
        newOrder[key] = newOrder[key]+1 || 1;
        //3. set new order object to state
        this.setState({
            order: newOrder
        });
    };

    /* Delete Fish from Order function */
    deleteFromOrder = key => {
        //STEPS TO ADDING TO STATE
        //1. take copy of existing state
        const newOrder = {...this.state.order};
        //2. remove fish
        delete newOrder[key];
        //3. set new fishes object to state
        this.setState({
            order: newOrder
        });
    }

    /* Apart of React Component Lifecycle - mounting is when nodes are added to the DOM */
    componentDidMount() {
        //get store name
        const storeName = this.props.match.params.storeName;
        //get local storage item
        var item = localStorage.getItem(storeName);
        //if local storage has this store then set the state
        if(item !== null) {
            item = JSON.parse(item);
            this.setState({
                fishes: item.fishes,
                order: item.order
            });
        }
    }

    /* Apart of React Component Lifecycle - called when component is updated */
    componentDidUpdate() {
        //get store name
        const storeName = this.props.match.params.storeName;
        //update item in local storage
        localStorage.setItem(storeName, JSON.stringify(this.state));
    }

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header storeName={this.props.match.params.storeName}/>
                    <ul className="fishes">
                        { Object.keys(this.state.fishes).map(key => 
                        <Fish key={key} fishKey={key} fish={this.state.fishes[key]} addToOrder={this.addToOrder}/>) }
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} deleteFromOrder={this.deleteFromOrder} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} 
                    fishes={this.state.fishes} updateFish={this.updateFish} deleteFish={this.deleteFish} />
            </div>
        );
    }
}

export default App;