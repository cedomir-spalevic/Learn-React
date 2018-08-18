import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {

    static propTypes = {
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        fishKey: PropTypes.string,
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        })
    };

    handleOnChange = evt => {
        //update fish
        const newFish = {
            ...this.props.fish,
            [evt.currentTarget.name]: evt.currentTarget.value
        };
        //call update fish function
        this.props.updateFish(this.props.fishKey, newFish);
    }

    render() {
        if(this.props.fish == null) return null;
        return (
            <div className="fish-edit">
                <input type="text" name="name" value={this.props.fish.name} onChange={this.handleOnChange} />
                <input type="text" name="price" value={this.props.fish.price} onChange={this.handleOnChange} />
                <select type="text" name="status" value={this.props.fish.status} onChange={this.handleOnChange} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea name="desc" value={this.props.fish.desc} onChange={this.handleOnChange} />
                <input type="text" name="image" value={this.props.fish.image} onChange={this.handleOnChange} />
                <button onClick={() => this.props.deleteFish(this.props.fishKey)}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFishForm;