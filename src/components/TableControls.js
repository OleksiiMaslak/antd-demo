import React, { useState } from 'react';
import { Select, Button, Input } from 'antd';
import { FormOutlined, DiffOutlined, ContainerOutlined, LockOutlined, RollbackOutlined} from '@ant-design/icons';

const { Option } = Select;

const TableControls = ({ data, setData, setCheckedRows }) => {
const [selectValue, setSelectValue] = useState('20');
const [searchValue, setSearchValue] = useState('');

const handleSelectChange = (value) => {
setSelectValue(value);
};

const handleButtonClick = (backgroundColor) => {
setData(data.map((item) => ({
...item,
backgroundColor,
})));
};

const handleSearchChange = (e) => {
setSearchValue(e.target.value);
};

const handleSearchSubmit = () => {
const filteredData = data.filter((item) => {
const searchRegex = new RegExp(searchValue, 'i');
return (
searchRegex.test(item.firstName) ||
searchRegex.test(item.lastName) ||
searchRegex.test(item.phone) ||
searchRegex.test(item.email)
);
});
setData(filteredData);
};

const handleSearchClear = () => {
setSearchValue('');
setData(data);
};

    return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <Select value={selectValue} onChange={handleSelectChange} style={{ marginRight: 16 }}>
      <Option value="20">20</Option>
      <Option value="25">25</Option>
      <Option value="30">30</Option>
      <Option value="35">35</Option>
      <Option value="40">40</Option>
    </Select>
    <Button style={{ marginRight: 5, backgroundColor: '#19bb19', padding: 5 }} onClick={() => handleButtonClick('#e91e63')}>
      <FormOutlined style={{ fontSize: 15, color: '#fff'}} />
    </Button>
    <Button style={{ marginRight: 5, backgroundColor: '#e91e63', padding: 5 }} onClick={() => handleButtonClick('#9e9e9e')}>
      <DiffOutlined style={{ fontSize: 15, color: '#fff'}} />
    </Button>
    <Button style={{ marginRight: 5, backgroundColor: '#bcc90c', padding: 5 }} onClick={() => handleButtonClick('#00bcd4')}>
      <ContainerOutlined style={{ fontSize: 15, color: '#fff'}} />
    </Button>
    <Button style={{ marginRight: 5, backgroundColor: '#1a61e6', padding: 5 }} onClick={() => handleButtonClick('#4caf50')}>
      <LockOutlined style={{ fontSize: 15, color: '#fff'}} />
    </Button>
    <Button style={{ marginRight: 5, backgroundColor: '#6d6d6d', padding: 5 }} onClick={handleSearchClear}>
      <RollbackOutlined style={{ fontSize: 15, color: '#fff'}} />
    </Button>
  </div>
  <Input
    placeholder="Search"
    value={searchValue}
    onChange={handleSearchChange}
    onPressEnter={handleSearchSubmit}
    style={{ width: 200, marginLeft: 16 }}
  />
</div>
);
};

export default TableControls;