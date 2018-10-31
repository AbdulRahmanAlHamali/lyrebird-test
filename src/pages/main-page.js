import React, { Component } from 'react';
import MainView from "../components/main-view";

class MainPage extends Component {

    constructor(props) {
        super(props);

        const {cookies} = this.props;
        if (!cookies.get('lyrebird_token')) {
            this.redirectToAuthorizationView();
        }
    }

    redirectToAuthorizationView() {
        let url = `${process.env.REACT_APP_API_URL}/authorize?`;

        url += 'response_type=token&';
        url += `client_id=${process.env.REACT_APP_CLIENT_ID}&`;
        url += `redirect_uri=${encodeURIComponent(window.location.origin + '/authorize')}&`;
        url += 'scope=voice&';
        url += `state=${this.generateAndStoreState()}`;

        window.location.href = url;
    }

    generateAndStoreState() {
        let state = Math.ceil(Math.random() * 1000000);
        const {cookies} = this.props;
        cookies.set('lyrebird_state', state);

        return state;
    }

    render() {
        return (
            <MainView/>
        )
    }
}

export default MainPage;