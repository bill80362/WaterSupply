import React, { Component } from "react";
import { Table, Divider, Tag, Popconfirm } from "antd";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default class extends Component {
  state = {
    columns: [
      {
        title: "月份",
        dataIndex: "month",
        key: "month"
      },
      {
        title: "站點名稱",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "營收",
        editable: true,
        dataIndex: "money",
        key: "money"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <Link to={"/ListData/" + record.key}>編輯資料</Link>
            <Divider type="vertical" />
            <Popconfirm
              title="是否確定刪除資料?"
              onConfirm={() => this.cancel(record.key)}
            >
              <a>刪除資料</a>
            </Popconfirm>
          </span>
        )
      }
    ],
    data: [
      {
        key: "1",
        month: "2019-05",
        name: "大里A站",
        money: "1138"
      },
      {
        key: "2",
        month: "2019-05",
        name: "大里A站",
        money: "1138"
      },
      {
        key: "3",
        month: "2019-05",
        name: "大里A站",
        money: "1138"
      }
    ]
  };

  UpdateList = () => {
      fetch('http://linebotme.nctu.me:8080/water/station/')
          .then(res => res.json())
          .then(data => {
              // console.log(data)
              let nData = new Array;
              data.map((item) => {
                  nData.push({key: item.id, name: item.name})
              })
              this.setState({data: nData})
          })
          .catch(e => console.log('错误:', e))
  }

  componentDidMount = () => {
      this.UpdateList();
  }

  render() {
    return (
      <div>
        <Table
          columns={this.state.columns}
          dataSource={this.state.data}
          title={() => "營收列表"}
        />
      </div>
    );
  }
}
