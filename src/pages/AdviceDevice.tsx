import React from 'react';
import Highcharts from 'highcharts';

export default class AdviceDevice extends React.Component {
    public alarmHighChart: any;
    constructor(props){
        super(props)
        this.alarmHighChart = React.createRef()
    }

    componentDidMount() {
        this.renderGraph();
    }

    renderGraph = () => {
        let Data:any = {
            title: { //表头
                text: '2010 ~ 2016 年太阳能行业就业人员发展情况'
            },
            subtitle: { //副标题
                text: '数据来源：thesolarfoundation.com'
            },
            yAxis: { //y坐标
                title: {
                    text: '就业人数'
                }
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'middle'
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                }
            },
            series: [{ //图表数据
                name: '安装，实施人员',
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
            }, {
                name: '工人',
                data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
            }, {
                name: '销售',
                data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
            }, {
                name: '项目开发',
                data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
            }, {
                name: '其他',
                data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
            }],
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 1000
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            },
            credits: { //去掉版权logo
                enabled: false
            },
            events: {load: function () {
                    console.log(this)
                }}
        }

        Highcharts.chart(this.alarmHighChart.current, Data);
    }

    render() {
        return (
            <div ref={this.alarmHighChart}/>
        );
    }
}
