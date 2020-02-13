// import 'antd/dist/antd.css';
import React from "react";
// import { Timeline } from 'antd';
import './index.scss'
import Highcharts from 'highcharts';


class HealthStock extends React.Component<any, any>{
    myDiv: any;
    constructor(props){
        super(props)
        this.myDiv = React.createRef()
        this.state = {
            times: [
                {posY:50, key: "firstF"},
                {posY:105, key: "secondF"},
                {posY:160, key: "thirdF"},
                {posY:215, key: "forthF"},
                {posY:270, key: "fiveF"},
            ],
            startX:20, space:50, r:5,
            times2: [
                {posY:50, key: "firstS"},
                {posY:105, key: "secondS"},
                {posY:160, key: "thirdS"},
                {posY:215, key: "forthS"},
                {posY:270, key: "fiveS"},
            ]
        }
    }


    // componentDidMount() {
    //   let chart = Highcharts.chart(this.myDiv.current, {
    //     chart: {
    //       backgroundColor: 'white',
    //       events: {
    //         load: function () {
    //           // Draw the flow chart
    //           console.log(this)
    //           var ren = this.renderer;
    //           // Separator, client from service
    //           ren.path(['M', -20, 100, 'L', 80, 100])
    //             .attr({
    //               'stroke-width': 2,
    //               stroke: 'silver',
    //               dashstyle: 'dash'
    //             }).add();
    //
    //
    //           // Separator, CLI from service
    //
    //         }
    //       }
    //     },
    //     credits: {
    //       enabled: false
    //     },
    //     title: {text: ''},
    //
    //   });
    //
    // }
    componentDidMount() {
        let {startX, space, r, times, times2} = this.state
        let all = document.getElementById('all');
        let me = document.getElementById('container')

        // all.appendChild(node)
        // console.log(me.clientHeight, me.clientWidth)
    }

    render() {
        let {startX, space, r, times, times2} = this.state
        let points = `${startX+r},${times[0].posY} ${startX+20},${times[0].posY} 40,80 80,80`
        return (
            <div id='container'>
                <svg id="all">
                    {
                        times.map((startY)=>{
                            return (
                                <>
                                    <circle id={startY.key} cx={startX} cy={startY.posY} r={r} stroke="gray" strokeWidth="2" fill="white"/>
                                    <line x1={startX} y1={startY.posY+r} x2={startX} y2={startY.posY+space}  stroke='gray' strokeWidth='2'/>
                                </>
                            )
                        })
                    }
                    <polyline points={points} style={{fill: 'white', strokeWidth: 1, stroke: 'red' }} />
                </svg>
                <svg>
                    {
                        times2.map((startY)=>{
                            return (
                                <>
                                    <circle id={startY.key} cx={startX} cy={startY.posY} r={r} stroke="gray" strokeWidth="2" fill="white"/>
                                    <line x1={startX} y1={startY.posY+r} x2={startX} y2={startY.posY+space}  stroke='gray' strokeWidth='2'/>
                                </>
                            )
                        })
                    }
                    <polyline points={points} style={{fill: 'white', strokeWidth: 1, stroke: 'red' }} />
                </svg>
            </div>
        )
    }
}
export default HealthStock;
