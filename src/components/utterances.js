import React, { Component } from 'react';
import {FETCH_STATUS, fetchUtterances} from "../redux/actions";
import {connect} from "react-redux";
import UtterancesTable from "./utterances-table";

class Utterances extends Component {

    componentDidMount() {
        this.props.fetch();
    }

    render() {
        let content = this.props.status === FETCH_STATUS.FETCHING? <h3>LOADING</h3> : <UtterancesTable utterances={this.props.utterances}/>;

        return (
            content
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