import ReactDom from 'react-dom';
import App from '@/app';
import { microInit } from '@/qiankun';

if (module && module.hot) {
    module.hot.accept();
}

ReactDom.render(<App />, document.getElementById('app'));