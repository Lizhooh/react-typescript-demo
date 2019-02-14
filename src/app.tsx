import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import RouterList from './routes';
import Menu from './components/menu';

export default class extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = { showload: false };
    }
    componentWillMount() {
        // 初次加载时，先显示加载图标
        this.setState({ showload: true });
        // 通过 token 校验后再显示界面
        setTimeout(() => {
            this.setState({ showload: false });
        }, 1000);
        // 如果不通过则转跳到登录页
    }
    render() {
        const { showload } = this.state;
        return (
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
                    {showload && <div className='loading'>加载中...</div>}
                </div>
            </Router>
        );
    }
}
