// Imports
import React from 'react';
import ReactHelmet from 'react-helmet';

// About Component
class About extends React.Component {

    render() {
        return (
            <div className="col s12 m10">
                <ReactHelmet
                    title="About - Simple Chat"
                />

                <h2>About</h2>

                <p>Current version: No student/lecturer distinction. Any account can create lecture session and any account can give and view feedback.</p>
                <p>Next step: Separating accounts. Only students can give feedback, only lecturers can view. Also, rating system</p>
                <p>Testing Plan for Feedback feature: </p>
                <blockquote>                     - Did not give rating. Did not enter message.<br />                     - Message length very large ( more than 500 words? )<br />                     - Message length normal (100 words)</blockquote>
                <p>Testing Plan for login, user accounts: </p>
                <blockquote>
                     - Register: no id, no password, exceed password length, normal id, normal pw. Register alr existing account.<br/>
                     - Login: wrong id, wrong password. nonexistent account. </blockquote> 
            </div>
        )
    }

}

// Contexts
About.contextTypes = {
    router: React.PropTypes.object.isRequired
};

// Finally, export the Component
export default About;
