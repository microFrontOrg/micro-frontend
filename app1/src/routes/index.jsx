
const User = lazy(() => import('@/pages/User'));
const routes = [
    {
        component: User,
        path: '/one/user',
    }
]

export default routes;