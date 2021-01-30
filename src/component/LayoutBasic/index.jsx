import React,{useState} from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu  } from 'antd';
import {MenuUnfoldOutlined,MenuFoldOutlined} from '@ant-design/icons';
import {adminRoutes} from '../../routes'

const { Header, Sider, Content } = Layout;

const LayoutBasic = (props) =>{
  const routes = adminRoutes.filter(route=>route.menuInHide);
  console.log(routes);
  const [collapsed,setCollapsed] = useState(false);
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {routes.map(route=>{
                return (
                <Menu.Item 
                    key={route.path}
                    onClick={path => props.history.push(path.key)}
                >
                    {route.name}
                </Menu.Item>
                )
            })}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: '10' }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => { setCollapsed(!collapsed) },
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '15px 30px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
export default withRouter(LayoutBasic);