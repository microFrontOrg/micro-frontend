const User = lazy(() => import('@/pages/User'))
const Menu = lazy(() => import('@/pages/Menu'))

const routes = [
  {
    path: '/app2/user',
    component: User
  },
  {
    path: '/app2/menu',
    component: Menu
  }
]

export default routes
