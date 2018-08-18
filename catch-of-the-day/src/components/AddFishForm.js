import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component {

    //create refs
    fishNameRef = React.createRef();
    fishPriceRef = React.createRef();
    fishStatusRef = React.createRef();
    fishDescRef = React.createRef();
    fishImageRef = React.createRef();

    static propTypes = {
        addFish: PropTypes.func
    };

    /* Create Fish function */
    createFish = evt => {
        //stop form from submitting
        evt.preventDefault();
        //create fish object
        const fish = {
            name: this.fishNameRef.value.value,
            price: parseFloat(this.fishPriceRef.value.value),
            status: this.fishStatusRef.value.value,
            desc: this.fishDescRef.value.value,
            image: this.fishImageRef.value.value
        }
        //call addFish function to add fish to state
        this.props.addFish(fish);
        //reset form
        evt.currentTarget.reset();
    }

    render() {
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                <input name="name" ref={this.fishNameRef} type="text" placeholder="Name"/>
                <input name="price" ref={this.fishPriceRef} type="text" placeholder="Price"/>
                <select name="status" ref={this.fishStatusRef}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" ref={this.fishDescRef} placeholder="Description"/>
                <input name="image" ref={this.fishImageRef} type="text" placeholder="Image"/>
                <button type="submit">Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;