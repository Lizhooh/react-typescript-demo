import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import RouterList from './router';
import styled from 'styled-components';

import Menu from './components/menu';

export default class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { views: RouterList };
    }
    render() {
        const { views } = this.state;

        return (
            <Router>
                <div className="main">
                    <Menu list={views} />
                    <Container className="body">
                        <Switch>
                            {views.map((item, index) => (
                                <Route
                                    exact={true}
                                    path={item.url}
                                    key={`r-${index}`}
                                    component={item.view} />
                            ))}
                        </Switch>
                    </Container>
                </div>
            </Router>
        );
    }
}

const Container = styled.div`
    height: 200px;
`;
