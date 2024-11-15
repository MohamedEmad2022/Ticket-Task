import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Headers from "./components/Header";
import { Button, Layout } from "antd";
import TextEditor from "./components/editor";
import OrdersTabs from "./components/ordersTabs";
import { LeftSquareOutlined, RightSquareOutlined } from "@ant-design/icons";

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { Sider, Content, Footer, Header } = Layout;
  return (
    <Layout>
      <Sider collapsible collapsedWidth={0} trigger={null} collapsed={collapsed} width={300} className="bg-sky-50">
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="bg-white h-auto m-0 p-0 flex justify-between">
        <Button

            icon={collapsed ? <RightSquareOutlined /> : <LeftSquareOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '30px',
              width: 50,
              height: 50,
            }}
          />
          <Headers />
        </Header>
      <Content className="bg-white">
        <OrdersTabs />
        
      </Content>
      <Footer className="sticky bottom-0 left-0">
      <TextEditor />
      </Footer>
      </Layout>
    </Layout>

    
  );
};

export default App;
