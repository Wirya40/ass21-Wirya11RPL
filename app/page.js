"use client";
import React from "react";
import { Layout, Menu } from "antd";
import {
  HomeOutlined,
  InfoCircleOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content, Footer } = Layout;

const Pages = () => {
  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "2",
      icon: <InfoCircleOutlined />,
      label: "About",
    },
    {
      key: "3",
      icon: <ContactsOutlined />,
      label: "Contact",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          background: "#001529",
          padding: 0,
          textAlign: "center",
          color: "white",
          fontSize: "20px",
        }}
      >
        My Ant Design Layout
      </Header>

      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={menuItems}
          />
        </Sider>

        <Layout style={{ padding: "24px" }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              background: "#fff",
              minHeight: 280,
              borderRadius: 8,
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <h2>Welcome to the Content Section</h2>
            <p>This is the area where you can add your main content.</p>
          </Content>

          <Footer style={{ textAlign: "center", marginTop: "16px" }}>
            Ant Design Layout Example ©2025 
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Pages;
