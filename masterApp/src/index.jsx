import ReactDom from 'react-dom';
import App from '@/app';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';

if (module && module.hot) {
    module.hot.accept();
}

ReactDom.render(<App />, document.getElementById('app'));
const container = document.getElementById('container');

registerMicroApps(
    [
        { name: 'app1', entry: '//localhost:1001', container: container, activeRule: '/app1' },
        { name: 'app2', entry: '//localhost:1002', container: container, activeRule: '/app2' }
    ],
    {}
)

setDefaultMountApp('/app1');

start();

