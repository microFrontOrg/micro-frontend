import { Suspense } from 'react';
import { Form, Row, Col, Input, Button, ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import SystemLayout from '@/layouts/SystemLayout';
import './index.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ConfigProvider locale={zh_CN}>
                <Suspense fallback={<div>loading</div>}>
                    {/* <Router>
                        <Switch>
                            <Route path='/' component={SystemLayout}></Route>
                        </Switch>
                    </Router> */}
                    <div>444</div>
                    <div id="container"></div>
                </Suspense>
            </ConfigProvider>


        )
    }
}

export default Form.create()(App);
