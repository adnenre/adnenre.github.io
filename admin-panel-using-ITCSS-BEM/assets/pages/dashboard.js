

(function ($) {
    'use strict';

    var Dashboard = function () { };

    Dashboard.prototype.init = function () {
        //stacked chart
       var chart =  c3.generate({
            bindto: '#stackedChart',
            data: {
                x: 'x',
                xFormat: '%Y',
                columns: [
                    ['x', '2010', '2011', '2012', '2013', '2014', '2015','2016','2017','2018'],
                    ['Revenue', 80, 120, 150, 140, 160, 150, 130, 120, 150, 140, 160, 150],
                    ['Pageview', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220]
                ],
                types: {
                    Revenue: 'area-spline',
                    Pageview: 'area-spline'
                    // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
                },
                colors: {
                    Revenue: '#dddddd',
                    Pageview: 'orange'
                }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    // if true, treat x value as localtime (Default)
                    // if false, convert to UTC internally
                    localtime: false,
                    tick: {
                       
                        format: '%Y-%m'
                    }
                }
            },
            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            },
            zoom: {
                enabled: true
            }
        });
       
        
        /****************************
            * BARRE CHART
            */
        c3.generate({
            bindto: '#barChart',
            data: {
                
                columns: [
                   
                    ['data1', 30, 200, 100, 400, 150],
                    ['data2', 50, 120, 80, 220, 150]
                ],
                axes: {
                    data1: 'y',
                    data2: 'x'
                },
                types: {
                    data1: 'bar', // ADD,

                },

                labels: true,
                colors: {
                    data1: 'rgba(0,0,0,0.4)',
                    data2: 'rgba(255,255,255,0.4)',

                }

            },

            grid: {
                x: {
                    show: true
                },
                y: {
                    show: true
                }
            }


        });


    }


    $.NovisDashboard = new Dashboard(),
        $.NovisDashboard.Constructor = Dashboard;

}(window.jQuery)),

    //initializing 
    function ($) {
        'use strict';
        $.NovisDashboard.init();
    }(window.jQuery);


