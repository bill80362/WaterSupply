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

export default class extends Component {
    state = {
        data:[
            { genre: '測試數據', sold: 500, income: 2300 },
            { genre: '大里小強站', sold: 115, income: 667 },
            { genre: '大里二號哥', sold: 120, income: 982 },
            { genre: '太平一姊', sold: 350, income: 5271 },
            { genre: '北屯嚇嚇叫', sold: 150, income: 3710 }
        ],
        cols:{
            sold: { alias: '營收' },
            genre: { alias: '機子' },
        }
    }

    render() {
        return (
            <div>
                <div><h1>各站營收圖表</h1></div>
                <div style={{width:'600px',height:'500px'}}>
                    <Chart data={this.state.data} scale={this.state.cols}>
                        <Axis name="genre" title/>
                        <Axis name="sold" title/>
                        <Legend position="top" dy={-20} />
                        <Tooltip />
                        <Geom type="interval" position="genre*sold" color="genre" />
                    </Chart>
                </div>
            </div>
        );
    }
}

