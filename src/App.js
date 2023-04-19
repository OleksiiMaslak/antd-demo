import { Menu, Layout } from 'antd';
import { Input, InputNumber, DatePicker, TimePicker, Switch, Table, Form, Radio, Space, Cascader  } from 'antd'
import { useState } from 'react';
import { ExperimentOutlined, MenuOutlined, RightOutlined, DownOutlined  } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Column } = Table;
const options = [
  {
    label: 'Light',
    value: 'light',
    children: new Array(20).fill(null).map((_, index) => ({
      label: `Number ${index}`,
      value: index,
    })),
  },
  {
    label: 'Bamboo',
    value: 'bamboo',
    children: [
      {
        label: 'Little',
        value: 'little',
        children: [
          {
            label: 'Toy Fish',
            value: 'fish',
          },
          {
            label: 'Toy Cards',
            value: 'cards',
          },
          {
            label: 'Toy Bird',
            value: 'bird',
          },
        ],
      },
    ],
  },
];
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    render: () => (
      <Space size="middle">
        <a>Delete</a>
        <a>
          <Space>
            More actions
            <DownOutlined />
          </Space>
        </a>
      </Space>
    ),
  },
];
const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'John Brown',
    age: Number(`${i}2`),
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}
const defaultExpandable = {
  expandedRowRender: (record) => <p>{record.description}</p>,
};
const defaultTitle = () => 'Here is title';
const defaultFooter = () => 'Here is footer';
const onChange = (value) => {
  console.log(value);
};

function App() {
  const [bordered, setBordered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState('large');
  const [expandable, setExpandable] = useState(defaultExpandable);
  const [showTitle, setShowTitle] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showfooter, setShowFooter] = useState(true);
  const [rowSelection, setRowSelection] = useState({});
  const [hasData, setHasData] = useState(true);
  const [tableLayout, setTableLayout] = useState();
  const [top, setTop] = useState('none');
  const [bottom, setBottom] = useState('bottomRight');
  const [ellipsis, setEllipsis] = useState(false);
  const [yScroll, setYScroll] = useState(false);
  const [xScroll, setXScroll] = useState();
  const handleBorderChange = (enable) => {
    setBordered(enable);
  };
  const handleLoadingChange = (enable) => {
    setLoading(enable);
  };
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };
  const handleTableLayoutChange = (e) => {
    setTableLayout(e.target.value);
  };
  const handleExpandChange = (enable) => {
    setExpandable(enable ? defaultExpandable : undefined);
  };
  const handleEllipsisChange = (enable) => {
    setEllipsis(enable);
  };
  const handleTitleChange = (enable) => {
    setShowTitle(enable);
  };
  const handleHeaderChange = (enable) => {
    setShowHeader(enable);
  };
  const handleFooterChange = (enable) => {
    setShowFooter(enable);
  };
  const handleRowSelectionChange = (enable) => {
    setRowSelection(enable ? {} : undefined);
  };
  const handleYScrollChange = (enable) => {
    setYScroll(enable);
  };
  const handleXScrollChange = (e) => {
    setXScroll(e.target.value);
  };
  const handleDataChange = (newHasData) => {
    setHasData(newHasData);
  };
  const scroll = {};
  if (yScroll) {
    scroll.y = 240;
  }
  if (xScroll) {
    scroll.x = '100vw';
  }
  const tableColumns = columns.map((item) => ({
    ...item,
    ellipsis,
  }));
  if (xScroll === 'fixed') {
    tableColumns[0].fixed = true;
    tableColumns[tableColumns.length - 1].fixed = 'right';
  }
  const tableProps = {
    bordered,
    loading,
    size,
    expandable,
    title: showTitle ? defaultTitle : undefined,
    showHeader,
    footer: showfooter ? defaultFooter : undefined,
    rowSelection,
    scroll,
    tableLayout,
  };
  const [collapsed, setCollapsed] = useState(false);
  const dataSource = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    },
  ];

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
                  <div className="input-row">
                    <Input placeholder="Login" className="input-1-1" />
                    <Input.Password placeholder="Password" className="input-1-2" />
                    <button className="login-btn">Log In</button>
                  </div>
                  <div className="input-row">
                    <Cascader
                      style={{
                        width: '100%',
                      }}
                      options={options}
                      onChange={onChange}
                      multiple
                      maxTagCount="responsive"
                    />
                  </div>
                </div>
          </div>
          
          
          <Form
        layout="inline"
        className="components-table-demo-control-bar"
        style={{
          marginBottom: 16,
        }}
      >
        <Form.Item label="Bordered">
          <Switch checked={bordered} onChange={handleBorderChange} />
        </Form.Item>
        <Form.Item label="loading">
          <Switch checked={loading} onChange={handleLoadingChange} />
        </Form.Item>
        <Form.Item label="Title">
          <Switch checked={showTitle} onChange={handleTitleChange} />
        </Form.Item>
        <Form.Item label="Column Header">
          <Switch checked={showHeader} onChange={handleHeaderChange} />
        </Form.Item>
        <Form.Item label="Footer">
          <Switch checked={showfooter} onChange={handleFooterChange} />
        </Form.Item>
        <Form.Item label="Expandable">
          <Switch checked={!!expandable} onChange={handleExpandChange} />
        </Form.Item>
        <Form.Item label="Checkbox">
          <Switch checked={!!rowSelection} onChange={handleRowSelectionChange} />
        </Form.Item>
        <Form.Item label="Fixed Header">
          <Switch checked={!!yScroll} onChange={handleYScrollChange} />
        </Form.Item>
        <Form.Item label="Has Data">
          <Switch checked={!!hasData} onChange={handleDataChange} />
        </Form.Item>
        <Form.Item label="Ellipsis">
          <Switch checked={!!ellipsis} onChange={handleEllipsisChange} />
        </Form.Item>
        <Form.Item label="Size">
          <Radio.Group value={size} onChange={handleSizeChange}>
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="middle">Middle</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Scroll">
          <Radio.Group value={xScroll} onChange={handleXScrollChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="scroll">Scroll</Radio.Button>
            <Radio.Button value="fixed">Fixed Columns</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Table Layout">
          <Radio.Group value={tableLayout} onChange={handleTableLayoutChange}>
            <Radio.Button value={undefined}>Unset</Radio.Button>
            <Radio.Button value="fixed">Fixed</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Top">
          <Radio.Group
            value={top}
            onChange={(e) => {
              setTop(e.target.value);
            }}
          >
            <Radio.Button value="topLeft">TopLeft</Radio.Button>
            <Radio.Button value="topCenter">TopCenter</Radio.Button>
            <Radio.Button value="topRight">TopRight</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Pagination Bottom">
          <Radio.Group
            value={bottom}
            onChange={(e) => {
              setBottom(e.target.value);
            }}
          >
            <Radio.Button value="bottomLeft">BottomLeft</Radio.Button>
            <Radio.Button value="bottomCenter">BottomCenter</Radio.Button>
            <Radio.Button value="bottomRight">BottomRight</Radio.Button>
            <Radio.Button value="none">None</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
      <Table
        {...tableProps}
        pagination={{
          position: [top, bottom],
        }}
        columns={tableColumns}
        dataSource={hasData ? data : []}
        scroll={scroll}
      />
        </Content>
        

        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;