import { Input, DatePicker, Select, Cascader, Button } from 'antd';

const { Option } = Select;
const options = [
  {
    value: 'usa',
    label: 'USA',
  },
  {
    value: 'uk',
    label: 'Great Britain',
  },
  {
    value: 'ua',
    label: 'Ukraine',
  },
];

const ComponentWithInputs = () => {
  return (
    <div style={{ backgroundColor: '#fff', margin: '25px', padding: '25px' }}>
      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <label style={{ flex: 1 }}>
          Date:
          <DatePicker style={{width: "100%"}} />
        </label>
        <label style={{ flex: 1, marginLeft: '15px', marginRight: '15px' }}>
          Country:
          <Cascader
            style={{
              width: '100%',
            }}
            options={options}
            multiple
            maxTagCount="responsive"
            
          />
        </label>
        <label style={{ flex: 1 }}>
          Status:
          <Select style={{ width: '100%' }}>
            <Option value="active">Active</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
        </label>
      </div>
      <div style={{ display: 'flex', alignItems: 'self-end' }}>
        <label style={{ flex: 1 }}>
          Broker:
          <Input />
        </label>
        <label style={{ flex: 1, marginLeft: '15px', marginRight: '15px' }}>
          Source:
          <Input />
        </label>
        <Button style={{ backgroundColor: '#ff6600', color: '#fff', minWidth: '300px '}}>SHOW</Button>
      </div>
    </div>
  );
};

export default ComponentWithInputs;