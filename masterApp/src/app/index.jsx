import { Suspense } from 'react';
import { Form, Row, Col, Input, Button, ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import SystemLayout from '@/layouts/SystemLayout';
import LoginLayout from '@/layouts/LoginLayout';
import Login from '@/pages/Login'
import './index.less';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

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
                            <Route exact path='/login' component={LoginLayout}>
                                <Route path='' component={Login} />
                            </Route>
                            <Route path='/system' component={SystemLayout}></Route>
                            <Redirect from='/' to='/login' />
                        </Switch>
                    </Router>
                </Suspense>
            </ConfigProvider>


        )
    }
}



export default Form.create()(App);
