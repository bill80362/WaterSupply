import React, { Component } from "react";
import { DatePicker, Card, Select, Input, Form, Button } from "antd";
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const Option = Select.Option;

export default class extends Component {
  render() {
    return (
      <div>
        <Form>
          <Card title="編輯營收資料" type="inner" style={{ width: 500 }}>
            選擇站點名稱:XXXX
            <br />
            選擇月份:2019-5
            <br />
            營收金額
            <Input
              placeholder="請填入金額"
              style={{ width: 200, marginLeft: 5 }}
            />
          </Card>
        </Form>
      </div>
    );
  }
}
