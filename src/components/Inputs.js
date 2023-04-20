import { Input, InputNumber, DatePicker, TimePicker, Switch, Cascader } from 'antd'

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

const onChange = (value) => {
  console.log(value);
};

function SiteInputs() {
    return (
        <>
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
        </>
    )
}
export default SiteInputs;