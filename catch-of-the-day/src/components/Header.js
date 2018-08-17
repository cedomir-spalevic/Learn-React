import React from 'react';

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

export default Header;