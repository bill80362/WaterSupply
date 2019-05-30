import React, {Component} from "react";
import {
    G2,
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label,
    Legend,
    View,
    Guide,
    Shape,
    Facet,
    Util
} from "bizcharts";
import DataSet from "@antv/data-set";

export default class extends Component {
    state = {
        data:[
            {
                month: "01-22",
                機子2號: 100,
                機子1號: 500
            },
            {
                month: "02-22",
                機子2號: 200,
                機子1號: 600
            },
            {
                month: "03-22",
                機子2號: 300,
                機子1號: 100
            },
        ],
        field:["機子1號","機子2號"],
        token: this.props.location.passwd
    }
    UpdateReport = () => {
        //更新營收資料
        fetch('http://linebotme.nctu.me/water/money/report2.php?p='+this.state.token)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                let nData = new Array;
                data.map((item) => {
                    nData.push(item)
                })
                console.log("更因營收報表2",nData)
                this.setState({data: nData})
            })
            .catch(e => console.log('错误:', e))
        //更新站點
        fetch('http://linebotme.nctu.me/water/station/?p='+this.state.token)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                let nField = new Array;
                data.map((item) => {
                    nField.push(item.name)
                })
                console.log(nField)
                this.setState({field: nField})
            })
            .catch(e => console.log('错误:', e))

    }
    componentDidMount = () => {
        this.UpdateReport();
    }

    render() {
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: "fold",
            fields: this.state.field,
            // 展开字段集
            key: "city",
            // key字段
            value: "temperature" // value字段
        });
        console.log(dv);
        const cols = {
            month: {
                range: [0, 1]
            }
        };
        return (
            <div>
                <div><h1>各站營收圖表</h1></div>
                <div style={{width:'600px',height:'500px'}}>
                    <Chart data={dv} scale={cols} forceFit>
                        <Legend />
                        <Axis name="month" />
                        <Axis
                            name="temperature"
                            label={{
                                formatter: val => `${val}`
                            }}
                        />
                        <Tooltip
                            crosshairs={{
                                type: "y"
                            }}
                        />
                        <Geom
                            type="line"
                            position="month*temperature"
                            size={2}
                            color={"city"}
                            shape={"smooth"}
                        />
                        <Geom
                            type="point"
                            position="month*temperature"
                            size={4}
                            shape={"circle"}
                            color={"city"}
                            style={{
                                stroke: "#fff",
                                lineWidth: 1
                            }}
                        />
                    </Chart>
                </div>
            </div>
        );
    }
}
