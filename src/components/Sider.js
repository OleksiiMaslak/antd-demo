import { Layout, Menu } from 'antd';
import { ExperimentOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { MenuOutlined, RightOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;


function MySider() {
    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };


  return (
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
  );
}

export default MySider;