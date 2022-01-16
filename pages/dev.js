import { Slider, Menu, Button, Form, Input } from "antd";

const { SubMenu } = Menu;

export default function Dev() {
  

  
  return (
    <div className=" bg-gradient-to-b from-slate-50 to-slate-700 h-full  ">
      <div className="h-10"></div>
      <div className="md:grid grid-cols-2 gap-10  mx-auto max-w-screen-xl md:h-screen ">
        <div className="m-10 h-48">
          {" "}
          <Menu mode="horizontal">
            <Menu.Item key="mail">Navigation One</Menu.Item>
            <Menu.Item key="app" disabled>
              Navigation Two
            </Menu.Item>
            <SubMenu key="SubMenu" title="Navigation Three - Submenu">
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </div>
        <div className="m-10">
          <Button  type="primary">Primary Button</Button>
          <Button>Default Button</Button>
          <Button type="dashed">Dashed Button</Button>
          <br />
          <Button type="text">Text Button</Button>
          <Button type="link">Link Button</Button>
        </div>

        <div className="m-10">
          <Form
            name="basic"
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            ></Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button  type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div className="m-10">
          Slider: <Slider defaultValue={30} disabled={false} />
          <Slider range defaultValue={[20, 50]} disabled={false} />
        </div>
      </div>
    </div>
  );
}
