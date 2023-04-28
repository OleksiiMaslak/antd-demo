import { Layout, Menu } from 'antd';
import { ExperimentOutlined, ExperimentFilled, ExperimentTwoTone } from '@ant-design/icons';
import { useState } from 'react';
import { MenuOutlined, RightOutlined, HomeOutlined, CodeSandboxOutlined, GlobalOutlined, SettingFilled, TeamOutlined, KeyOutlined, SplitCellsOutlined } from '@ant-design/icons';

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
          <a href="#">
            <ExperimentTwoTone style={{ fontSize: 24, color: '#fff' }} />
          </a>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<CodeSandboxOutlined />}>
            Leads
          </Menu.Item>
          <SubMenu
            key="sub1"
            icon={<GlobalOutlined />}
            title="API access"
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
          <Menu.Item key="6" icon={<SettingFilled />}>
            API settings
          </Menu.Item>
          <Menu.Item key="7" icon={<TeamOutlined />}>
            All users
          </Menu.Item>
          <Menu.Item key="8" icon={<KeyOutlined  />}>
            API logs
          </Menu.Item>
          <Menu.Item key="9" icon={<SplitCellsOutlined  />}>
            Status Comparisons
          </Menu.Item>
        </Menu>
      </Sider>
  );
}

export default MySider;