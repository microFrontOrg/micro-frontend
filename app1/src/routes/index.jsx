
const User = lazy(() => import('@/pages/User'));
const appName = 'app1';

const routes = [
    {
        component: User,
        path: `/${appName}/user`,
    }
]

export default routes;