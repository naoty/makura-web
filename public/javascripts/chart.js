$(function () {
    // localize timezone
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart',
            type: 'spline'
        },
        title: {
            text: 'curl -X POST http://makura.herouapp.com'
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            min: 0,
            max: 1
        },
        series: [{
            data: [
                getRandomPoint()
            ]
        }]
    });

    var socket = io.connect();
    socket.on('stream', function (data) {
        chart.series[0].addPoint(getRandomPoint(), true, false);
    });

    function getRandomPoint() {
        return [(new Date()).getTime(), Math.random()];
    }
});
