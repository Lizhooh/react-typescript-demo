import React, { Component } from 'react';
import * as actions from '../stores/state/home';
import { connect } from 'react-redux';

export interface IProps extends actions.IFunc {
    state: actions.IState,
    [rest: string]: any,
};

export default connect(
    state => ({ state: (state as any).home }),
    actions
)(class extends Component<IProps> {
    render() {
        const { name, count } = this.props.state;
        const { add } = this.props;

        return (
            <div>
                {name}
                <p>{count}</p>
                <p><button onClick={add}>加一</button></p>
            </div>
        );
    }
});




