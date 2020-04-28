import ReactDom from 'react-dom';
import App from '@/app';
import { registerMicroApps, start, setDefaultMountApp } from 'qiankun';
import fetch from 'isomorphic-fetch';

if (module && module.hot) {
    module.hot.accept();
}

ReactDom.render(<App />, document.getElementById('app'));

const request = url =>
    fetch(url, {
        referrerPolicy: 'origin-when-cross-origin'
    });

registerMicroApps(
    [
        { name: 'app1', entry: '//localhost:1001', container: '#container', activeRule: '/one' },
        { name: 'app2', entry: '//localhost:1002', container: '#container', activeRule: '/app2' }
    ],
    {
        beforeLoad: [
            app => {

            }
        ],
        beforeMount: [
            app => {

            }
        ],
        afterMount: [
            app => {

            }
        ],
        beforeUnmount: [
            app => {

            }
        ],
        afterUnmount: [
            app => {

            }
        ]
    },
    {
        fetch: request
    }
)

setDefaultMountApp('/one')

start();

