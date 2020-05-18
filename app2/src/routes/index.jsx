const User = lazy(() => import('@/pages/User'))
const Menu = lazy(() => import('@/pages/Menu'))

const routes = [
  {
    path: '/app2/MallManager/ProviderManager',
    component: User
  },
  {
    path: '/app2/MallManager/WarehouseManager',
    component: Menu
  }
]

export default routes
