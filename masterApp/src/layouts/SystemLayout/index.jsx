import { useEffect, useState } from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd'
import MenuItem from 'antd/lib/menu/MenuItem'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Container } from '@/components'
import { microInit } from '@/qiankun'
import { StaticRouter } from 'react-router-dom'
import menu from '@/menu'

const { Header, Sider, Content } = Layout

function SystemLayout (props) {
  // 组件状态
  const [selectedHeader, setSelectedHeader] = useState(null)

  useEffect(() => {
    microInit() // 子应用初始化
    handleHeaderMenuChange(menu[0])
  }, [])

  function routeChange (path) {
    props.history.push('/system' + path)
  }

  /**
   * @description 一级菜单改变事件
   * @param {object} item 当前选中的一级菜单
   */
  function handleHeaderMenuChange (item) {
    setSelectedHeader(item)
  }

  /**
   *
   * @param {object} item 侧边菜单数据
   */
  function handleSiderMenuChange (item) {
    console.log(item);
    props.history.push('/system' + item.resUrl)
  }

  /**
   * @description 存在三级菜单情况下菜单渲染
   * @param {object} 二级菜单配置
   */
  function renderMenuWithThird (secondMenu) {
    return (
      <SubMenu
        key={secondMenu.id}
        title={secondMenu.resourceName}
        defaultSelectedKeys={secondMenu.thirdResources[0].id}
      >
        {secondMenu.thirdResources.map(thirdMenu => {
          return (
            <MenuItem
              key={thirdMenu.id}
              onClick={() => handleSiderMenuChange(thirdMenu)}
            >
              {thirdMenu.resourceName}
            </MenuItem>
          )
        })}
      </SubMenu>
    )
  }

  /**
   * @description 不存在三级菜单情况下菜单渲染
   * @param {object} 二级菜单配置
   */
  function renderMenuNoThird (secondMenu) {
    return (
      <MenuItem
        key={secondMenu.id}
        onClick={() => handleSiderMenuChange(secondMenu)}
      >
        {secondMenu.resourceName}
      </MenuItem>
    )
  }

  /**
   * @description 渲染侧边菜单
   * @param {object} selectedHeader 选中的一级导航
   */
  function renderSiderMenu (selectedHeader) {
    console.log('selectedHeader',selectedHeader)
    if (selectedHeader) {
      let secondResources = selectedHeader.secondResources
      return secondResources.map(secondMenu => {
        let hasThird =
          secondMenu.thirdResources && secondMenu.thirdResources.length
        return hasThird
          ? renderMenuWithThird(secondMenu)
          : renderMenuNoThird(secondMenu)
      })
    } else {
      return null
    }
  }
  return (
    <Layout>
      <HeaderLayout>
        <Logo></Logo>
        <Menu
          theme='dark'
          mode='horizontal'
          style={{ lineHeight: '64px' }}
          defaultSelectedKeys={[selectedHeader ? selectedHeader.id : '']}
        >
          {menu.map(item => {
            return (
              <MenuItem
                key={item.id}
                onClick={() => handleHeaderMenuChange(item)}
              >
                {item.resourceName}
              </MenuItem>
            )
          })}
        </Menu>
      </HeaderLayout>
      <Layout>
        <SiderLayout>
          <Menu mode='inline' theme='dark' style={{ height: '100%' }}>
            {renderSiderMenu(selectedHeader)}
          </Menu>
        </SiderLayout>
        <ContentLayout>
          <BreadcrumbWrap>
            <Container>
              <Breadcrumb>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Application Center</Breadcrumb.Item>
                <Breadcrumb.Item>Application List</Breadcrumb.Item>
                <Breadcrumb.Item>An AppFlication</Breadcrumb.Item>
              </Breadcrumb>
            </Container>
          </BreadcrumbWrap>
          <ContentWrap id='container'></ContentWrap>
        </ContentLayout>
      </Layout>
    </Layout>
  )
}

// class SystemLayout extends Component {
//   constructor (props) {
//     super(props)
//   }

//   componentDidMount () {
//     microInit() // 子应用初始化
//   }

//   routeChange = path => {
//     this.props.history.push('/system' + path)
//   }

//   render () {
//     return (
//       <Layout>
//         <HeaderLayout>
//           <Logo></Logo>
//           <Menu theme='dark' mode='horizontal' style={{ lineHeight: '64px' }}>
//             <MenuItem key='1' onClick={() => this.routeChange('/app1')}>
//               app1
//             </MenuItem>
//             <MenuItem key='2' onClick={() => this.routeChange('/app2')}>
//               app2
//             </MenuItem>
//             <MenuItem key='3'>nav 3</MenuItem>
//           </Menu>
//         </HeaderLayout>
//         <Layout>
//           <SiderLayout>
//             <Menu
//               mode='inline'
//               theme='dark'
//               style={{ height: '100%' }}
//               defaultOpenKeys={['1-1']}
//             >
//               <SubMenu
//                 key='1-1'
//                 title={
//                   <span>
//                     <Icon type='mail' />
//                     <span>Navigation One</span>
//                   </span>
//                 }
//               >
//                 <MenuItem
//                   key='1'
//                   onClick={() => {
//                     this.routeChange('/app1/user')
//                   }}
//                 >
//                   用户管理
//                 </MenuItem>
//                 <MenuItem
//                   key='2'
//                   onClick={() => {
//                     this.routeChange('/app1/role')
//                   }}
//                 >
//                   角色管理
//                 </MenuItem>
//                 <MenuItem
//                   key='3'
//                   onClick={() => {
//                     this.routeChange('/app2/menu')
//                   }}
//                 >
//                   菜单管理
//                 </MenuItem>
//                 <MenuItem
//                   key='4'
//                   onClick={() => {
//                     this.routeChange('/app2/user')
//                   }}
//                 >
//                   app2-用户管理
//                 </MenuItem>
//               </SubMenu>
//             </Menu>
//           </SiderLayout>
//           <ContentLayout>
//             <BreadcrumbWrap>
//               <Container>
//                 <Breadcrumb>
//                   <Breadcrumb.Item>Home</Breadcrumb.Item>
//                   <Breadcrumb.Item>Application Center</Breadcrumb.Item>
//                   <Breadcrumb.Item>Application List</Breadcrumb.Item>
//                   <Breadcrumb.Item>An AppFlication</Breadcrumb.Item>
//                 </Breadcrumb>
//               </Container>
//             </BreadcrumbWrap>
//             <ContentWrap id='container'></ContentWrap>
//           </ContentLayout>
//         </Layout>
//       </Layout>
//     )
//   }
// }

export default SystemLayout

const siderWidth = '200px'
const headerHeight = '64px'

const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
`

const HeaderLayout = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${headerHeight};
`

const SiderLayout = styled(Sider)`
  position: fixed;
  top: ${headerHeight};
  left: 0;
  bottom: 0;
  width: ${siderWidth};
`

const ContentLayout = styled(Content)`
  position: fixed;
  top: ${headerHeight};
  left: ${siderWidth};
  right: 0;
  bottom: 0;
  background-color: #ececec;
`

const BreadcrumbWrap = styled.div`
  margin: 20px 20px 0 20px;
`

const ContentWrap = styled.div`
  padding: 20px;
`
