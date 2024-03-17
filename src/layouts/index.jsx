import { useLocation } from "react-router-dom";
import { useOutlet } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import { routes } from "@/router/router.jsx";
import { useState } from "react";
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Menu, Layout } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
const { Header, Sider, Content } = Layout;

const APP = () => {
  // react-group-transition
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } =
    routes.find((route) => route.path === location.pathname) ?? {};

  // menu
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);
  useEffect(() => {
    const selectedKey = localStorage.getItem("selectedKey");
    if (selectedKey != null) {
      setSelectedKeys([selectedKey]);
    } else {
      setSelectedKeys(["1"]);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={selectedKeys}
          onClick={({ key }) => {
            setSelectedKeys([key]);
            localStorage.setItem("selectedKey", key);
            if (key == 1) navigate("/");
            else navigate("/setting");
          }}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
            },
            {
              key: "2",
              icon: <SettingOutlined />,
              label: "Setting",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: "#fff",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Scrollbars>
          <Content
            style={{
              margin: "24px 16px",
              padding: 20,
              minHeight: 280,
              background: "#fff",
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <SwitchTransition>
              <CSSTransition
                key={location.pathname}
                nodeRef={nodeRef}
                timeout={300}
                unmountOnExit
                classNames="my-node"
              >
                {() => <div ref={nodeRef}>{currentOutlet}</div>}
              </CSSTransition>
            </SwitchTransition>
          </Content>
        </Scrollbars>
      </Layout>
    </Layout>
  );
};

export default APP;
