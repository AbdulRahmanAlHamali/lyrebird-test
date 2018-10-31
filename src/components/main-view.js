import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Voices from "./voices";
import Utterances from "./utterances";

class MainView extends Component {

    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {

        const { value } = this.state;

        return (
            <div>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="My Voices" />
                        <Tab label="My Utterances" />
                    </Tabs>
                </AppBar>
                {value === 0 && <Voices/>}
                {value === 1 && <Utterances/>}
            </div>
        );
    }
}

export default MainView;