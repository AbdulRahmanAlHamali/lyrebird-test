import React, { Component } from 'react';
import {connect} from "react-redux";
import {FETCH_STATUS, fetchVoices} from "../redux/actions";
import VoicesTable from "./voices-table";

class Voices extends Component {

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        let content = this.props.status === FETCH_STATUS.FETCHING? <h5>LOADING...</h5> : <VoicesTable voices={this.props.voices}/>;

        return (
            content
        );
    }
}

const mapStateToProps = state => ({
    voices: state.voices.entries,
    status: state.voices.status
});

const mapDispatchToProps = {
    fetch: fetchVoices
};

export default connect(mapStateToProps, mapDispatchToProps)(Voices);