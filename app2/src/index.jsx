import ReactDom from 'react-dom'
import App from '@/app'

if (module && module.hot) {
  module.hot.accept()
}

function render () {
  ReactDom.render(<App />, document.getElementById('app2'))
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
} else {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}

export async function bootstrap () {}

export async function mount (props) {
  render()
}

export async function unmount () {}
