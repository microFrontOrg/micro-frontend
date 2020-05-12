import { Suspense } from 'react';
import { Form, Row, Col, Input, Button, ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import SystemLayout from '@/layouts/SystemLayout';
import Login from '@/pages/Login';
import './index.less';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ConfigProvider locale={zh_CN}>
                <Suspense fallback={<div>loading</div>}>
                    <Router>
                        <Switch>
                            <Route exact path='/login' component={Login} />
                            <Route path='/system' component={SystemLayout} />
                            <Redirect exact from='/' to='/login' />
                        </Switch>
                    </Router>
                </Suspense>
            </ConfigProvider>
        )
    }
}



export default Form.create()(App);
