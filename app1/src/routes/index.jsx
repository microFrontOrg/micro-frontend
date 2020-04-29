
const User = lazy(() => import('@/pages/User'));

const genPath = function (path) {
    return '/app1' + path;
}
const routes = [
    {
        component: User,
        path: genPath('/user'),
    }
]

export default routes;