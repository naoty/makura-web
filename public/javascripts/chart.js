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
            max: 1000,
            title: {
                text: 'Pressure Unit'
            }
        },
        series: [{
            data: [],
            name: 'Pressure'
        }]
    });

    var socket = io.connect();
    socket.on('stream', function (pressure) {
        chart.series[0].addPoint(getPressurePoint(pressure), true, false);
    });

    function getPressurePoint(pressure) {
        return [(new Date()).getTime(), parseFloat(pressure)];
    }
});
