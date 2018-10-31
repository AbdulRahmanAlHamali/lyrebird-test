import React, { Component } from 'react';
import {FETCH_STATUS, fetchUtterances} from "../redux/actions";
import {connect} from "react-redux";

class Utterances extends Component {

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        let content = this.props.status === FETCH_STATUS.FETCHING? 'LOADING' : JSON.stringify(this.props.utterances);

        return (
            <div>{content}</div>
        );
    }
}

const mapStateToProps = state => ({
    utterances: state.utterances.entries,
    status: state.utterances.status
});

const mapDispatchToProps = {
    fetch: fetchUtterances
};

export default connect(mapStateToProps, mapDispatchToProps)(Utterances);