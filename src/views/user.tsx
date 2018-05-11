import * as React from 'react';
import * as actions from '../store/state/user';
import { connect } from 'react-redux';

export interface Props {
    state: actions.State,
    [rest: string]: any;
}

class UserView extends React.Component<Props, any> {
    render() {
        return (
            <div>
                {this.props.state.name}
            </div>
        );
    }
}

export default connect(
    state => ({ state: (state as any).user }),
    actions
)(UserView);
