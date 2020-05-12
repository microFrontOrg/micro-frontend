
const User = lazy(() => import('@/pages/User'));

const routes = [
    {
        component: User,
        path: `/user`,
    }
]

export default routes;