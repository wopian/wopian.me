<!DOCTYPE html><html><head><title>Wopian</title><link href="//fonts.googleapis.com/css?family=Quicksand:300,400,700" rel="stylesheet" type="text/css"><link href="/assets/css/main.min.css" rel="stylesheet"></head><body id="skrollr-body"><canvas id="snow"></canvas><section><h1 data-center="color:rgba(255,255,255,1)" data-30p-top="color:rgba(255,255,255,1);" data-25p-top="color:rgba(255,255,255,0);">wopian</h1><p data-center="color:rgba(255,255,255,1)" data-45p-top="color:rgba(255,255,255,0)">Frontend Web Developer</p></section><script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script><script type="text/javascript" src="/assets/javascript/app.min.js"></script><script type="text/javascript">$(function () {
            $('#languages').highcharts({
                colors: ['#FFFFFF', '#D1ECE9','#A2D9D4','#74C6BE','#46B3A8', '#17A093'],
                credits: {
                    enabled: false
                },
                title: {
                    text: null
                },
                chart: {
                    backgroundColor: 'transparent',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        borderWidth: 0,
                        dataLabels: {
                            enabled: false,
                        },
                        showInLegend: true
                    }
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'top',
                    layout: 'vertical',
                    x: 0,
                    y: 100,
                    itemHoverStyle: {
                        color: '#e2e2e2'
                    },
                    padding: 3,
                    itemMarginTop: 5,
                    itemMarginBottom: 5,
                    symbolWidth: 14,
                    symbolHeight: 14,
                    symbolRadius: 14/2,
                    itemStyle: {
                        lineHeight: '18px',
                        fontWeight: 400,
                        fontSize: '18px',
                        color: '#fff',
                        fontFamily: 'Quicksand'
                    }
                },
                series: [{
                    type: 'pie',
                    name: 'Languages',
                    data: [
                        <?=$string?>
                    ],
                }]
            });
        });</script></body></html>