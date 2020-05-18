/*
 * @Description: 菜单配置
 * @Author: 郭军伟
 * @Date: 2020-04-29 09:08:37
 * @LastEditTime: 2020-05-18 17:59:28
 */
const menu = [
  {
    resourceName: '运营维护配置',
    resUrl: '/zanwu',
    id: 1,
    secondResources: [
      {
        resourceName: '在线客服',
        resUrl: '/',
        id: 3,
        thirdResources: [
          {
            resourceName: '在线客服问题配置',
            id: 7,
            resUrl: '/app1/service_online/OnlineService'
          }
        ]
      },
      {
        resourceName: 'APP维护配置',
        resUrl: '/',
        id: 4,
        thirdResources: [
          {
            resourceName: '版本升级配置',
            id: 9,
            resUrl: '/app1/AppConfigContent/VersionUpdate'
          }
        ]
      }
    ]
  },
  {
    resourceName: '商城管理',
    resUrl: '/',
    id: 2,
    secondResources: [
      {
        resourceName: '供应商管理配置',
        resUrl: '/',
        id: 5,
        thirdResources: [
          {
            resourceName: '供应商管理',
            id: 11,
            resUrl: '/app2/MallManager/ProviderManager'
          }
        ]
      },
      {
        resourceName: '商品管理',
        resUrl: '/',
        id: 6,
        thirdResources: [
          {
            resourceName: '虚拟商品',
            id: 12,
            resUrl: '/app2/MallManager/WarehouseManager'
          }
        ]
      }
    ]
  }
]

export default menu;