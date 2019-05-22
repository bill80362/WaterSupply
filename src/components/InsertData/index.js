import React, {Component} from "react";
import { DatePicker, Card ,Select,Input,Form,Button    } from 'antd'
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
const Option = Select.Option;

export default class extends Component {
    render() {
        return (
            <div>
                <Form>
                <Card title="新增營收資料" type="inner" style={{ width: 500 }}>
                    選擇站點
                    <Select defaultValue="lucy" style={{ width: 200,marginLeft:5 }} >
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="disabled" disabled>
                            Disabled
                        </Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <br />
                    選擇月份<MonthPicker placeholder="Select month" />
                    <br />
                    營收金額<Input placeholder="請填入本月營收金額" style={{ width: 200,marginLeft:5 }} />
                </Card>
                </Form>
                <Form>
                <Card title="新增站點" type="inner" style={{ width: 500,marginTop:20 }}>
                    站點名稱<Input placeholder="請填入站點名稱" style={{ width: 200,margin:5 }} />
                    <Button type="primary" htmlType="submit">
                        新增
                    </Button>
                </Card>
                </Form>
            </div>
        );
    }
}
