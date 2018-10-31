import React, { Component } from 'react';
import {connect} from "react-redux";
import {FETCH_STATUS, fetchVoices} from "../redux/actions";

class Voices extends Component {

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        let content = this.props.status === FETCH_STATUS.FETCHING? 'LOADING' : JSON.stringify(this.props.voices);

        return (
            <div>{content}</div>
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