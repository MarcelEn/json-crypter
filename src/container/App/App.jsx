import React, { Component } from 'react';
import { connect } from 'react-redux';
import { } from 'react-bootstrap';
import DataConnector from '../../components/DataConnector/DataConnector.jsx';
import JsonView from '../../components/JsonView/JsonView.jsx';
import { Grid } from 'react-bootstrap';
import { actions } from '../../actions';

class App extends Component {
    render() {
        return (
            <div>
                <DataConnector
                    toggleShowSettings={this.props.toggleShowSettings}
                    showSettings={this.props.ui.showSettings}
                />

                <JsonView
                    JsonData={this.props.data.JsonData}
                    toggleOpenMenuPoint={this.props.toggleOpenMenuPoint}
                    openPaths={this.props.ui.openPaths}
                />

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleShowSettings: () => { dispatch(actions.toggleShowSettings()) },
        toggleOpenMenuPoint: path => {dispatch(actions.toggleOpenMenuPoint(path))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)