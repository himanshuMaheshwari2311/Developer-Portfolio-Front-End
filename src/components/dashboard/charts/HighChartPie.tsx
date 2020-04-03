import React from 'react'
import HighCharts from 'highcharts';
import HighChartsReact from 'highcharts-react-official';

const options = {

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Commit per Language, 2020'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            showInLegend: true
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'C++',
            y: 61.41,
            sliced: true,
            selected: true
        }, {
            name: 'Python',
            y: 11.84
        }, {
            name: 'Typescript',
            y: 10.85
        }, {
            name: 'Java',
            y: 4.67
        }, {
            name: 'C#',
            y: 4.18
        }, {
            name: 'Other',
            y: 7.05
        }]
    }]
}

const HighChartPie: React.FC = () => {
    return (
        <HighChartsReact
            highCharts={HighCharts}
            options={options}

        />
    )
}

export default HighChartPie;