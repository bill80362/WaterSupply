
import InsertData from './components/InsertData'

import React from 'react';
import { BrowserRouter , Route, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

function App() {
  return (
      <BrowserRouter>
        <Layout className="layout">
            <Header>
                <div className="logo" >加水站營收系統</div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1"><Link to="/">營收圖表</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/list">營收細目列表</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/add">新增資料</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Route exact path="/" component={InsertData} />
                    <Route path="/list" component={InsertData} />
                    <Route path="/add" component={InsertData} />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Bill Design©2019</Footer>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
