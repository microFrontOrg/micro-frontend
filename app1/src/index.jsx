import ReactDom from 'react-dom';
import App from '@/app';

ReactDom.render(<App />, document.getElementById('app'));

if (module && module.hot) {
    module.hot.accept();
}

export async function bootstrap() {
    
}

export async function mount(props) {
    ReactDom.render(<App />, document.getElementById('app'));
}

export async function unmount() {
    
}

