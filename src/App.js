import InsertData from "./components/InsertData";
import UpdateData from "./components/UpdateData";
import ChartTime from "./components/ChartTime";
import ChartStation from "./components/ChartStation";
import ListData from "./components/ListData";


import React, {Component} from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";
import {Layout, Menu, Breadcrumb,Input} from "antd";

const {Header, Content, Footer} = Layout;
const Search = Input.Search;

export default class extends Component {

    state = {
        passwd:""
    }

    SetPasswd = (value) => {
        console.log("@@@",value)
        this.setState({
            passwd:value
        })
    }

    render() {
        return (
            <div className="DeviceMobile">
                <BrowserRouter>
                    <Layout className="layout">
                        <Header>
                            <div className="logo">加水站營收系統</div>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={["1"]}
                                style={{lineHeight: "64px"}}
                            >
                                <Menu.Item key="1">
                                    <Link to={{pathname:'/',passwd:this.state.passwd}}>各站今年營收總額</Link>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Link to={{pathname:'/ChartTime',passwd:this.state.passwd}}>各站每月營收圖表</Link>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Link to={{pathname:'/ListData',passwd:this.state.passwd}}>營收細目管理</Link>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <Link to={{pathname:'/InsertData',passwd:this.state.passwd}}>新增資料</Link>
                                </Menu.Item>
                                <Menu.Item>
                                    <span><Search size="small" style={{width:'200px'}} placeholder="請輸入通關密碼" onSearch={(value)=>this.SetPasswd(value)} enterButton="儲存"/></span>
                                </Menu.Item>
                            </Menu>
                        </Header>
                        <Content style={{padding: "0 50px"}}>
                            <div style={{background: "#fff", padding: 24, minHeight: 280}}>
                                <Route exact path="/" component={ChartStation} passwd={this.state.passwd}/>
                                <Route exact path="/ChartTime" component={ChartTime} passwd={this.state.passwd}/>
                                <Route path="/ListData" component={ListData} passwd={this.state.passwd}/>
                                <Route path="/InsertData" component={InsertData} passwd={this.state.passwd}/>
                                {/*<Route path="/ListData/:id" component={UpdateData} passwd={this.state.passwd}/>*/}
                            </div>
                        </Content>
                        <Footer style={{textAlign: "center"}}>Bill Design©2019</Footer>
                    </Layout>
                </BrowserRouter>
            </div>
        )
    }
}

