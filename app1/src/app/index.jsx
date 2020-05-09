import { Suspense } from 'react';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import './index.less';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import routes from '@/routes';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ConfigProvider locale={zh_CN}>
                <Suspense fallback='loading'>
                    <Router>
                        <Redirect from='/' to={routes[0].path} />
                        {
                            routes.map(item => {
                                return <Route key={item.path} path={item.path} component={item.component} />
                            })
                        }
                    </Router>
                </Suspense>
            </ConfigProvider>
        )
    }
}

export default App;
