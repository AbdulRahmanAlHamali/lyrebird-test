import React, { Component } from 'react';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';

class AuthorizePage extends Component {

    constructor(props) {
        super(props);

        let parsedResponse = queryString.parse(window.location.hash);
        const {cookies} = this.props;

        this.state = {};

        // if the provided state is the same one that was sent to lyrebird earlier
        if (cookies.get('lyrebird_state') === parsedResponse['state']) {
            cookies.set('lyrebird_token', parsedResponse['access_token']);
            this.state.authorized = true;

            // The state used for verifying lyrebird is no more needed
            cookies.remove('lyrebird_state');
        } else {
            this.state.authorized = false;
        }
    }

    render() {
        return (
            <div>
                {this.state.authorized? <Redirect to='/' /> : <h3>Something went wrong...</h3>}
            </div>
        )
    }
}

export default AuthorizePage;