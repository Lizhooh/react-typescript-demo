import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import RouterList from './routes';
import Menu from './components/menu';

export default () => (
    <Router>
        <div className="main">
            <Menu list={RouterList as any} />
            <div className="body">
                <Switch>
                    {RouterList.map((item, index) => (
                        <Route
                            exact={true}
                            path={item.url}
                            key={`r-${index}`}
                            component={item.view} />
                    ))}
                </Switch>
            </div>
        </div>
    </Router>
);