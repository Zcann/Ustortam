import { Layout, Menu, Space, Image } from "antd";
import Link from "next/link";

import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Header } = Layout;

export default function MyHeader({ children }) {
  return (
    <div className="">
      <div className=" ">
        <Menu
          style={{
            justifyContent: "center",
            width: "1000px",
            marginLeft: "400px",
          }}
          theme="light"
          mode="horizontal"
        >
          <Space size={40}>
            <Menu.Item key="1">
              <Link href="/">Me </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/photo">Photo</Link>
            </Menu.Item>
            
            <Menu.Item key="4">
              <Link href="/dev">Dev</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link href="/movie">Movie</Link>
            </Menu.Item>
            
          </Space>
        </Menu>
      </div>
      <div>{children}</div>
    </div>
  );
}
