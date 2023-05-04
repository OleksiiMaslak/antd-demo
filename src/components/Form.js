import React, { useState } from 'react';
import { Table, Switch, Select } from 'antd';
import TableControls from './TableControls';
const { Option } = Select;

const data = [
  {
    key: '1',
    id: 1,
    source: 'source 1',
    broker: 'broker 1',
    firstName: 'Alex',
    lastName: 'Obama',
    phone: '+380785699882',
    email: "AlexObama@gmail.com",
    firstBrokerStatus: 'Test Lead',
    status: 'TEST',
    color: '#fff',
    backgroundColor: '#e91e63',
    borderColor: '#e91e63',
    brokerStatus: 'Test',
    confirmedFTD: 'not',
    country: 'CH',
    date: '2023-04-25 12:18:28',
    sendDate: '2023-04-26 15:27:48',
    from: 'https://ant.design/components/table',
  },
  {
    key: '2',
    id: 2,
    source: 'source 2',
    broker: 'broker 2',
    firstName: 'Egor',
    lastName: 'Biden',
    phone: '+380785699882',
    email: "EgorBiden@gmail.com",
    firstBrokerStatus: 'Not Handled',
    status: 'Broker Error',
    color: '#fff',
    backgroundColor: '#9e9e9e',
    borderColor: '#9e9e9e',
    brokerStatus: '',
    confirmedFTD: 'not',
    country: 'CH',
    date: '2023-04-25 12:18:28',
    sendDate: '2023-04-26 15:27:48',
    from: 'https://ant.design/components/table',
    
  },
  {
    key: '3',
    id: 3,
    source: 'source 3',
    broker: 'broker 3',
    firstName: 'Andrew',
    lastName: 'Trump',
    phone: '+380785699882',
    email: "AndrewTrump@gmail.com",
    firstBrokerStatus: 'TEST',
    status: 'New',
    color: '#00bcd4',
    backgroundColor: '#fff',
    borderColor: '#00bcd4',
    brokerStatus: 'Test',
    confirmedFTD: 'not',
    country: 'CH',
    date: '2023-04-25 12:18:28',
    sendDate: '2023-04-26 15:27:48',
    from: 'https://ant.design/components/table',
  },
];

const SiteForm = () => {
  const [checkedRows, setCheckedRows] = useState([]);
  const [tableData, setTableData] = useState(data);

  const handleSelectChange = (value, record) => {
    const newData = [...tableData];
    const index = newData.findIndex((item) => item.key === record.key);
    if (index !== -1) {
      newData[index] = {
        ...newData[index],
        firstBrokerStatus: value,
      };
      setTableData(newData);
    }
  }

  const onSwitchChange = (checked, id) => {
    const newCheckedRows = [...checkedRows];
    const index = newCheckedRows.indexOf(id);
    if (checked && index === -1) {
      newCheckedRows.push(id);
    } else if (!checked && index !== -1) {
      newCheckedRows.splice(index, 1);
    }
    setCheckedRows(newCheckedRows);
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '',
      dataIndex: 'checkbox',
      key: 'checkbox',
      width: 25,
      render: (text, record) => (
        <Switch
          checked={checkedRows.includes(record.id)}
          onChange={(checked) => onSwitchChange(checked, record.id)}
          checkedChildren={<span style={{ color: 'green' }}>Вкл</span>}
          unCheckedChildren={<span style={{ color: 'red' }}>Выкл</span>}
        />
      ),
    },
    {
      title: 'Source',
      dataIndex: 'source',
      key: 'source',
      render: (_, record) => (
        <Select
          defaultValue={record.source}
          style={{ width: 120 }}
          onChange={(value) => {
            const newData = [...data];
            const index = newData.findIndex((item) => item.key === record.key);
            if (index !== -1) {
              newData[index] = {
                ...newData[index],
                source: value,
              };
              data.splice(index, 1, newData[index]);
            }
          }}
        >
          <Select.Option value="source 1">source 1</Select.Option>
          <Select.Option value="source 2">source 2</Select.Option>
          <Select.Option value="source 3">source 3</Select.Option>
        </Select>
      ),
    },
    {
      title: 'Broker',
      dataIndex: 'broker',
      key: 'broker',
      render: (_, record) => (
        <Select
          defaultValue={record.broker}
          style={{ width: 120 }}
          onChange={(value) => {
            const newData = [...data];
            const index = newData.findIndex((item) => item.key === record.key);
            if (index !== -1) {
              newData[index] = {
                ...newData[index],
                broker: value,
              };
              data.splice(index, 1, newData[index]);
            }
          }}
        >
          <Select.Option value="broker 1">broker 1</Select.Option>
          <Select.Option value="broker 2">broker 2</Select.Option>
          <Select.Option value="broker 3">broker 3</Select.Option>
        </Select>
      ),
    },
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'First Name',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'Last Name',
    },
    {
      title: 'phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'First Broker Status',
      dataIndex: 'firstBrokerStatus',
      key: 'firstBrokerStatus',
      render: (_, record) => (
        <Select
          defaultValue={record.firstBrokerStatus}
          style={{ width: 120 }}
          onChange={(value) => handleSelectChange(value, record)}
        >
          <Option value="Test Lead">Test Lead</Option>
          <Option value="Not Handled">Not Handled</Option>
          <Option value="TEST">TEST</Option>
        </Select>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (text, record) => {
        const style = {
          color: record.color,
          backgroundColor: record.backgroundColor,
          border: record.borderColor ? `1px solid ${record.borderColor}` : '',
          borderRadius: '4px',
          padding: '8px',
          textAlign: 'center',
        };
        return <div style={style}>{text}</div>;
      },
    },
    {
      title: 'broker Status',
      dataIndex: 'brokerStatus',
      key: 'broker Status',
    },
    {
      title: 'Confirmed FTD',
      dataIndex: 'confirmedFTD',
      key: 'Confirmaed FTD',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'Country',
    },
    {
      title: 'date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'send date',
      dataIndex: 'sendDate',
      key: 'send date',
    },
    {
      title: 'from',
      dataIndex: 'from',
      key: 'from',
    },
  ];

  return (
    <div style={{ backgroundColor: '#fff', margin: '25px', padding: '25px' }}>
      <TableControls/>
      <Table
        dataSource={data}
        columns={columns}
        scroll={{ x: 1570 }}
        
      />
    </div>
);
};

export default SiteForm;