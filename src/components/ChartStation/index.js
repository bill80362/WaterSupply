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
import base64 from "base-64"

export default class extends Component {
    state = {
        data:[
            { name: '等待資料中....', money: 0  },
        ],
        cols:{
            money: { alias: '營收' },
            name: { alias: '機子' },
        },
        token: this.props.location.passwd
    }

    //報表
    UpdateReport = () => {
        fetch('http://linebotme.nctu.me/water/money/report1.php?p='+this.state.token)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                let nData = new Array;
                data.map((item) => {
                    nData.push({name: item.name,money:parseInt(item.money)})
                })
                // console.log(nData)
                this.setState({data: nData})
            })
            .catch(e => console.log('错误:', e))
    }
    componentDidMount = () => {
        this.UpdateReport();
    }

    render() {
        console.log(this.props.passwd)
        return (
            <div>
                <div><h1>各站營收圖表</h1></div>
                <div style={{width:'600px'}}>
                    <Chart data={this.state.data} scale={this.state.cols}>
                        <Axis name="name" title/>
                        <Axis name="money" title/>
                        <Legend position="top" dy={-20} />
                        <Tooltip />
                        <Geom type="interval" position="name*money" color="name" />
                    </Chart>
                </div>
            </div>
        );
    }
}

