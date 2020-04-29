import ReactDom from 'react-dom';
import App from '@/app';

if (module && module.hot) {
    module.hot.accept();
}

function render() {
    ReactDom.render(<App />, document.getElementById('app1'));
}

if (!window.__POWERED_BY_QIANKUN__) {
    render();
}

export async function bootstrap() {

}

export async function mount(props) {
    render();
}

export async function unmount() {

}

