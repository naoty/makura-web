$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart',
            type: 'line'
        },
        xAxis: {
            type: 'datetime'
        },
        series: [{
            data: [1, 3, 5, 10]
        }]
    });
});
