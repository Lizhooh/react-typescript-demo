import React, { Component } from 'react';
import * as actions from '../stores/state/about';
import { connect } from 'react-redux';

export interface IProps {
    state: actions.IState,
}

export default connect(
    state => ({ state: (state as any).about }),
    actions
)(class extends Component<IProps> {
    render() {
        return (
            <div>
                {this.props.state.name}
            </div>
        );
    }
});




