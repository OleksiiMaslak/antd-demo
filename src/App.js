import { Menu, Layout } from 'antd';
import { Input, InputNumber, DatePicker, TimePicker, Switch } from 'antd'
import { useState } from 'react';
import { ExperimentOutlined, MenuOutlined, RightOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="app-logo">
          <ExperimentOutlined style={{ fontSize: 24, color: '#fff' }} />
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<MenuOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<MenuOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<MenuOutlined />}
            title="Option 3"
            popupOffset={[10, 0]}
          >
            <Menu.Item key="3" icon={<RightOutlined />}>
              Option 3.1
            </Menu.Item>
            <Menu.Item key="4" icon={<RightOutlined />}>
              Option 3.2
            </Menu.Item>
            <Menu.Item key="5" icon={<RightOutlined />}>
              Option 3.3
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        
        <Content style={{ margin: '0 16px' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <div className="inputs-container">
                  <div className="input-row">
                    <label htmlFor="input-1-1">Input №1</label>
                    <Input id="input-1-1" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-1-2">Input №2</label>
                    <InputNumber id="input-1-2" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-1-3">Input №3</label>
                    <DatePicker id="input-1-3" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-1-4">Input №4</label>
                    <TimePicker id="input-1-4" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-2-1">Input №5</label>
                    <Input id="input-2-1" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-2-2">Input №6</label>
                    <InputNumber id="input-2-2" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-2-3">Input №7</label>
                    <DatePicker id="input-2-3" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-2-4">Input №8</label>
                    <TimePicker id="input-2-4" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-3-1">Input №9</label>
                    <Input id="input-3-1" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-3-2">Input №10</label>
                    <InputNumber id="input-3-2" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-3-3">Input №11</label>
                    <DatePicker id="input-3-3" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-3-4">Input №12</label>
                    <TimePicker id="input-3-4" />
                  </div>
                  <div className="input-row">
                    <label htmlFor="input-switch">Switch</label>
                    <Switch id="input-switch" />
                  </div>
                </div>
              </div>
        </Content>
        

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;