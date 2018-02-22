// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

// App Imports
import MenuSecondary from './menus/secondary';

// Header Component
class Header extends React.Component {

    render() {
        return (
            <header>

                <h1>Give Feedback! :^)</h1>
        		

            </header>
        )
    }
}

// Contexts
Header.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Container
export default Header;