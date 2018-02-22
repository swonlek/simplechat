// Imports
import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// App Imports
import MenuPrimary from './secondary';

// Header Container
const MenuPrimaryContainer = createContainer(() => {
    return {
        user:  Meteor.user() ? Meteor.user() : {}
    };
}, MenuPrimary);

// Finally, export the Container
export default MenuPrimaryContainer;