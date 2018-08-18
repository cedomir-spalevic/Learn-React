import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
    static propTypes = {
        /**
           PropTypes.shape() allows you to define your own object -- you could use PropTypes.object but then that would be mean anyone could pass in any object
           which is not what we want
        */
        fish: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            desc: PropTypes.string,
            status: PropTypes.string,
            price: PropTypes.number
        }),
        addToOrder: PropTypes.func
    }
    render() {
        if(this.props.fish == null) return null;
        const fish = this.props.fish;
        const isAvailable = fish.status === "available";
        return (
            <li className="menu-fish">
                <img src={fish.image} alt={fish.name}/>
                <h3 className="fish-name">
                    {fish.name}
                    <span className="price">{formatPrice(fish.price)}</span>
                </h3>
                <p>{fish.desc}</p>
                <button disabled={!isAvailable} onClick={() => this.props.addToOrder(this.props.fishKey)}>
                    {isAvailable ? 'Add To Cart' : 'Sold Out!'}
                </button>
            </li>
        );
    }
}

export default Fish;