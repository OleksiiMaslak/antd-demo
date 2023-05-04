import React, { useState } from 'react';
import { Select, Button, Input } from 'antd';

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
<div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
<Select value={selectValue} onChange={handleSelectChange} style={{ marginRight: 16 }}>
<Option value="20">20</Option>
<Option value="25">25</Option>
<Option value="30">30</Option>
<Option value="35">35</Option>
<Option value="40">40</Option>
</Select>
<Button style={{ marginRight: 16 }} icon={<span className="icon-style icon-1"></span>} onClick={() => handleButtonClick('#e91e63')}></Button>
<Button style={{ marginRight: 16 }} icon={<span className="icon-style icon-2"></span>} onClick={() => handleButtonClick('#9e9e9e')}></Button>
<Button style={{ marginRight: 16 }} icon={<span className="icon-style icon-3"></span>} onClick={() => handleButtonClick('#00bcd4')}></Button>
<Button style={{ marginRight: 16 }} icon={<span className="icon-style icon-4"></span>} onClick={() => handleButtonClick('#4caf50')}></Button>
<Input
placeholder="Search"
value={searchValue}
onChange={handleSearchChange}
onPressEnter={handleSearchSubmit}
style={{ width: 200, marginRight: 16 }}
/>
<Button onClick={handleSearchClear}>Clear</Button>

</div>
);
};

export default TableControls;