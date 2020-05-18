
const User = lazy(() => import('@/pages/User'))
const Role = lazy(() => import('@/pages/Role'))

const routes = [
  {
    component: User,
    path: `/app1/service_online/OnlineService`
  },
  {
    component: Role,
    path: '/app1/AppConfigContent/VersionUpdate'
  }
]

export default routes
