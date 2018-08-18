import React from 'react';
import PropTypes from "prop-types";

/**
 * Stateless Function - basically a function that does not use React.Component and is just there to render HTML
 */
const Header = props => (
    <header className="top">
        <h1>Catch
            <span className="ofThe">
                <span className="of">of</span>
                <span className="the">the</span>
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{props.storeName}</span>
        </h3>
    </header>
);

Header.propTypes = {
    storeName: PropTypes.string.isRequired
}

export default Header;