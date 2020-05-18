
const User = lazy(() => import('@/pages/User'))
const Role = lazy(() => import('@/pages/Role'))

const routes = [
  {
    component: User,
    path: `/app1/user`
  },
  {
    component: Role,
    path: '/app1/role'
  }
]

export default routes
