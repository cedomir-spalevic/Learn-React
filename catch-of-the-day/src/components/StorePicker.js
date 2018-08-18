import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    static propTypes = {
        history: PropTypes.object
    };

    //create ref to store name input
    storeNameRef = React.createRef();

    goToStore = evt => {
        //stop form from submitting
        evt.preventDefault();
        //get text from input
        const store = this.storeNameRef.current.value;
        //change window location (go to next page)
        this.props.history.push(`/store/${store}`);
    }

    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input type="text" ref={this.storeNameRef} placeholder="Store Name" defaultValue={getFunName()} 
                    required/>
                <button type="submit">Visit Store -></button>
            </form>
        );
    }
}

export default StorePicker;