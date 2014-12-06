<!DOCTYPE html>
<html>

<head>
    <title>Wopian</title>
    <link href='//fonts.googleapis.com/css?family=Quicksand:300,400,700' rel='stylesheet' type='text/css'>
    <link href="/assets/css/main.min.css" rel="stylesheet">
</head>

<body id="skrollr-body">

    <canvas id="snow"></canvas>

    <section>
        <h1 data-center="color:rgba(255,255,255,1)"
            data-30p-top="color:rgba(255,255,255,1);"
            data-25p-top="color:rgba(255,255,255,0);"
        >wopian</h1>
        <p data-center="color:rgba(255,255,255,1)"
           data-45p-top="color:rgba(255,255,255,0)"
        >Frontend Web Developer</p>
    </section>

    <!--<section id="two">
        <h2 data-bottom="color:rgba(255,255,255,0)"
            data-center="color:rgba(255,255,255,1)"
            data-top="color:rgba(255,255,255,0)"
        >Stats & Skills</h2>
        <?php
            /*$url = "https://codeivate.com/users/wopian.json";
            $json = file_get_contents($url);
            $data= json_decode($json, true);

            function seconds2human($ss) {
                $m = (floor(($ss%3600)/60)>0)?floor(($ss%3600)/60).' minutes':"";
                $h = (floor(($ss % 86400) / 3600)>0)?floor(($ss % 86400) / 3600).' hours':"";
                $d = (floor(($ss % 2592000) / 86400)>0)?floor(($ss % 2592000) / 86400).' days':"";
                $M = (floor($ss / 2592000)>0)?floor($ss / 2592000).' months':"";
                $y = (floor($ss / 31557600)>0)?floor($ss / 31557600).' years':"";
                if (strlen($m) > 1 && (strlen($h) > 1 || strlen($d) > 1 || strlen($M) > 1 )) {
                    $and = 'and';
                }   else {
                    $and = '';
                }
                if (strlen($m) == '' && strlen($h) == '' && strlen($d) == '' && strlen($M) == '' && strlen($y) == '') {
                    $m = '0 minutes';
                }
                return "$y $M $d $h $and $m";
            }

            echo "<p class='big' data-bottom='color:rgba(255,255,255,0)'
                                 data-center='color:rgba(255,255,255,1)'
                                 data-top='color:rgba(255,255,255,0)'>I've spent <span class='bold'>" . seconds2human($data['time_spent']+1520000) . "</span> coding</p>";

            $languages = array();
            foreach($data['languages'] as $key => $row) {
                $languages[] = array($key, $row['level']);
            }

            $sort = array();
            foreach ($languages as $row) {
                $sort[] = $row[1];
                $sortname[] = $row[0];
            }
            array_multisort($sort, SORT_DESC, $sortname, $languages);

            $string = '';
            $other = '';
            foreach ($languages as $row) {
                if ($row[1] >= 1) {
                    $string .= "['" . $row[0] . "', " . $row[1] . "],";
                } else {
                    $other += $row[1];
                }
            }
            $string .= "['Other', $other]";
            */
        ?>

        <p data-bottom='color:rgba(255,255,255,0)'
                       data-center='color:rgba(255,255,255,1)'
                       data-top='color:rgba(255,255,255,0)'>Top languages:</p>

        <div id="languages" data-bottom="opacity:0"
                            data-center="opacity:1"
                            data-top="opacity:0"></div>
    </section>-->

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script type="text/javascript" src="/assets/javascript/app.min.js"></script>

    <script type="text/javascript">
        $(function () {
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
        });
    </script>
</body>

</html>
