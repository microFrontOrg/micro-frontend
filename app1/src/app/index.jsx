import { Suspense } from 'react';
import { Form, Row, Col, Input, Button, ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import './index.less';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from '@/routes';
import SystemLayout from '@/layouts/SystemLayout';

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
                            <SystemLayout>
                                {routes.map(item => {
                                    return <Route path={item.path} key={item.path} component={item.component}></Route>
                                })}
                            </SystemLayout>
                        </Switch>
                    </Router>

                </Suspense>
            </ConfigProvider>
        )
    }
}

export default Form.create()(App);
