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
                month: "01/22",
                機子2號: 100,
                機子1號: 500
            },
            {
                month: "02/22",
                機子2號: 200,
                機子1號: 600
            },
            {
                month: "03/22",
                機子2號: 300,
                機子1號: 700
            },
            {
                month: "04/22",
                機子2號: 500,
                機子1號: 900
            },
            {
                month: "05/22",
                機子2號: 800,
                機子1號: 1100
            },
            {
                month: "06/22",
                機子2號: 600,
                機子1號: 1100
            },
            {
                month: "07/22",
                機子2號: 700,
                機子1號: 1200
            },
            {
                month: "08/22",
                機子2號: 100,
                機子1號: 1000
            },
        ]
    }

    render() {
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: "fold",
            fields: ["機子1號","機子2號"],
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
