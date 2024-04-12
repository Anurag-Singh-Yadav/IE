'use client'

import React from 'react'
import ReactApexChart from 'react-apexcharts'

export default class ApexChart extends React.Component {
    constructor(props) {
      super(props);

    const {data} = props;

    this.state = {
        series: data,
        options: {
            chart: {
                height: 90,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    offsetY: 0,
                    startAngle: 0,
                    endAngle: 270,
                    hollow: {
                        margin: 5,
                        size: '30%',
                        background: 'transparent',
                        image: undefined,
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            show: false,
                        }
                    }
                }
            },
            colors: ['#5CB85C', '#FFA500', '#FF0000'],
            labels: ['Easy', 'Medium', 'Hard'],
            legend: {
                show: false,
                floating: true,
                fontSize: '16px',
                position: 'left',
                offsetX: 160,
                offsetY: 15,
                labels: {
                    useSeriesColors: true,
                },
                markers: {
                    size: 0
                },
                formatter: function(seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                },
                itemMargin: {
                    vertical: 3
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    legend: {
                        show: false
                    }
                }
            }]
        },
    };
    }

    render() {
      return (
        <div className='bg-primary p-3'>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={250} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }