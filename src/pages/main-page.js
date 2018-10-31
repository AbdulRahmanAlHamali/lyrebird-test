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
        let url = 'https://myvoice.lyrebird.ai/authorize?';

        url += 'response_type=token&';
        url += 'client_id=1CFr6XcOAzP1S4Bz61gmUm0oqN1&';
        url += `redirect_uri=${encodeURIComponent('http://localhost:3000/authorize')}&`;
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