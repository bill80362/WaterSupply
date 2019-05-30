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
            {/*<Link to={"/ListData/" + record.key}>編輯資料</Link>*/}
            {/*<Divider type="vertical" />*/}
            <Popconfirm
              title="是否確定刪除資料?"
              onConfirm={() => this.CancelItem(record.key)}
            >
              <a>刪除資料</a>
            </Popconfirm>
          </span>
        )
      }
    ],
    data: [
      {
        key: "等待載入中...",
        month: "等待載入中...",
        name: "等待載入中...",
        money: "等待載入中..."
      },
    ],
    token: this.props.location.passwd
  };

  UpdateList = () => {
      fetch('http://linebotme.nctu.me/water/money/?p='+this.state.token)
          .then(res => res.json())
          .then(data => {
              console.log(data)
              let nData = new Array;
              data.map((item) => {
                  nData.push({key: item.id,month:item.month.substr(0,7), name: item.name,money:item.money})
              })
              this.setState({data: nData})
          })
          .catch(e => console.log('错误:', e))
  }

  componentDidMount = () => {
      this.UpdateList();
  }

  CancelItem = (del_id) => {
      fetch('http://linebotme.nctu.me/water/money/del.php?id='+del_id+'&p='+this.state.token)
          .then(res => res.json())
          .then(data => {
              this.UpdateList();
          })
          .catch(e => console.log('错误:', e))
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
