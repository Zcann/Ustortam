import { Menu, Space, Button } from "antd";
import Link from "next/link";


export default function MyHeader({ children }) {
  return (
    <div className="">
      <div className="fixed w-full z-10">
        <div className=" ">
          <Menu
            style={{
              justifyContent: "center",
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
      </div>
      <div>{children}</div>
    </div>
  );
}
