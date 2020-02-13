import React from 'react'
import echarts from 'echarts/lib/echarts'
import  'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import './index.scss'


class HealthProduction extends React.Component<any,any> {
    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('content-bottom'));
        // 绘制图表
        let option = {
            title: {
                text: 'TEST',
                x: 'center',
                y: 10

            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['2011年', '2012年']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
            },
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        };

        myChart.setOption(option);
    }
    render() {
        return (
            <>
                <div className='content-head'>仓储大屏</div>
                <div className='content-head2'>
                    <span>库存状态</span>
                    <span>作业状态</span>
                </div>
                <div id='content-bottom' className='content-bottom' >

                </div>
            </>
        );
    }
}

export default HealthProduction
