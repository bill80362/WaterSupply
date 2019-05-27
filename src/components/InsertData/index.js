import React, { Component } from "react";
import { DatePicker, Card, Select, Input, Form, Button } from "antd";
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const Option = Select.Option;



export default class extends Component {

    state = {
        StationInsertResult: "",
        MoneyInsertResult: "",
        SelectValue:"",
        StationList:[],
    }
    //新增營收
    handleInsertMoneySubmit = (e) => {
      // console.log(e.target.s_id.value)

      let formData  = new FormData();
      formData.append("s_id", this.state.SelectValue);
      formData.append("month", e.target.month.value);
      formData.append("money", e.target.money.value);

      // console.log(this.state.SelectValue)

      fetch('http://linebotme.nctu.me/water/money/add.php',{
          method: 'post',
          body:formData
      })
          .then(res => res.json())
          .then(data => {
            this.setState({MoneyInsertResult:"新增成功"})
          })
          .catch(e => {
              this.setState({MoneyInsertResult:"新增失敗"})
              console.log('错误:', e)
          })

        e.preventDefault();
    }
    //新增站點
    handleInsertStationSubmit = (e) => {
        // console.log(e.target.name.value)

        let formData  = new FormData();
        formData.append("name", e.target.name.value);

        fetch('http://linebotme.nctu.me/water/station/add.php',{
            method: 'post',
            body:formData
        })
            .then(res => res.json())
            .then(data => {
                this.setState({StationInsertResult:"新增成功"})
                this.UpdateList() //更新站點下拉選單
            })
            .catch(e => {
                this.setState({StationInsertResult:"新增失敗"})
                console.log('错误:', e)
            })

        e.preventDefault();
    }
    //下拉選單選擇後觸發
    handleSelectChange = value => {
        this.setState({SelectValue: value});
    }
    //更新下拉選單站點
    UpdateList = () => {
        fetch('http://linebotme.nctu.me/water/station/')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                let nData = new Array;
                data.map((item) => {
                    nData.push({value: item.id, label: item.name})
                })
                // console.log(nData)
                this.setState({StationList: nData})
            })
            .catch(e => console.log('错误:', e))
    }
    componentDidMount = () => {
        this.UpdateList();
    }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleInsertMoneySubmit}>
          <Card title="新增營收資料" type="inner" style={{ width: 500 }}>
            選擇站點
            <Select style={{ width: 200, margin: 5 }} onChange={this.handleSelectChange}>
                {this.state.StationList.map(item => (
                    <Option key={item.value}>{item.label}</Option>
                ))}
            </Select>
            <br />
            選擇月份
            <MonthPicker
              placeholder="Select month"
              style={{ width: 200, margin: 5 }}
              name="month"
            />
            <br />
            營收金額
            <Input
              placeholder="請填入本月營收金額"
              style={{ width: 200, margin: 5 }}
              name="money"
            />
            <br />
              <Button type="primary" htmlType="submit">
                  新增營收資料
              </Button>
              <span style={{color:'red'}}>{this.state.MoneyInsertResult}</span>
          </Card>
        </Form>
        <Form onSubmit={this.handleInsertStationSubmit}>
          <Card
            title="新增站點"
            type="inner"
            style={{ width: 500, marginTop: 20 }}
          >
            站點名稱
            <Input
              name = "name"
              placeholder="請填入站點名稱"
              style={{ width: 200, margin: 5 }}
            />
              <br />
            <Button type="primary" htmlType="submit">
              新增
            </Button>
              <span style={{color:'red'}}>{this.state.StationInsertResult}</span>
          </Card>
        </Form>
      </div>
    );
  }
}
