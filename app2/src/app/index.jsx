import { Suspense } from 'react'
import { Form, Row, Col, Input, Button, ConfigProvider } from 'antd'
import zh_CN from 'antd/es/locale/zh_CN'
import './index.less'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import routes from '@/routes'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <ConfigProvider locale={zh_CN}>
        <Suspense fallback={<div>loading</div>}>
          <Router basename='/system'>
            <Switch>
              {routes.map(route => {
                return (
                  <Route
                    key={route.path}
                    path={route.path}
                    component={route.component}
                  />
                )
              })}
              <Redirect exact from='/app2' to={routes[0].path} />
            </Switch>
          </Router>
        </Suspense>
      </ConfigProvider>
    )
  }
}

export default App
