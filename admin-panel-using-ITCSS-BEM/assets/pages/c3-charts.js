

(function($){
    'use strict';

    var c3Chart = function(){};

    c3Chart.prototype.init = function(){
      //stacked chart
      c3.generate({
        bindto: '#stackedChart',
        data: {
            columns: [
                ['Revenue', 80, 120, 150, 140, 160, 150, 130, 120, 150, 140, 160, 150,140, 160, 150, 130, 120, 150, 140, 160, 150,200,250,250],
                ['Pageview', 200, 130, 90, 240, 130, 220, 200, 130, 90, 240, 130, 220,200, 130, 90, 280, 130, 220, 200, 130, 90, 240, 130, 220]
            ],
            types: {
                Revenue: 'area-spline',
                Pageview: 'area-spline'
                // 'line', 'spline', 'step', 'area', 'area-step' are also available to stack
            },
            colors: {
                Revenue: '#dddddd',
                Pageview: '#222222'
            }
        },
        grid: {
          x: {
             show:true
          },
          y: {
              show:true
          }
      },
        zoom : {
          enabled : true
        }
    });
        

         /****************************
         * BARRE CHART
         */
        c3.generate({
            bindto: '#barChart',
            data: {
              columns: [
                ['data1', 30, 200, 100, 400, 150, 250, 100, 200, 150, 25],
                ['data2', 50, 120, 80, 220, 150, 500, 100, 250, 100, 300]
              ],
              types: {
                data1: 'bar', // ADD,
                
              },
             
              labels: true,
              colors: {
                data1: 'rgba(0,0,0,0.4)',
                data2: 'orange',
                
              },
             
             
            }, 
            grid: {
              x: {
                 show:true
              },
              y: {
                  show:true
              }
          }
            
            
        });
         
        /****************************
         * PIE CHART
         */
        c3.generate({
          bindto: '#pieChart',
          data: {
              // iris data from R
              columns: [
                  ['data1', 30],
                  ['data2', 120],
                  ['data3', 60],
                  ['data4', 120],
              ],
              
              colors: {
                data1: '#aa80df',
                data2: '#9871d8',
                data3: '#8b5fd3',
                data4: '#7541cb',
                
              },
              type : 'pie',
             
          }
      });
    }
   
     
    $.NovisC3Chart = new c3Chart(),
    $.NovisC3Chart.Constructor = c3Chart;
    
}(window.jQuery)),

//initializing 
function($){
   'use strict';
   $.NovisC3Chart.init();
}(window.jQuery);


