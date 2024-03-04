import { useState } from "react";
import {
  AppstoreOutlined,
  HomeOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
const items = [
  {
    label: <Link to="/">Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link to="/login">Login</Link>,
    key: "login",
    icon: <UserOutlined />,
  },
];
const MenuCore = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default MenuCore;
