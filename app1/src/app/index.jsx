import { Suspense } from 'react';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN';
import './index.less';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from '@/routes';
import User from '@/pages/User';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ConfigProvider locale={zh_CN}>
                <Suspense fallback='loading'>
                    <HashRouter>
                        {
                            routes.map(item => {
                                return <Route key={item.path} path={item.path} component={item.component}></Route>
                            })
                        }
                    </HashRouter>
                </Suspense>
            </ConfigProvider>
        )
    }
}

export default App;
