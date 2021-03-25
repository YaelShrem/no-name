// import React, { Component } from 'react';
// import CanvasJSReact from './canvasjs.react';
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

// class AreaChart extends Component {
//     render() {
//         const options = {
//             theme: "light2",
//             animationEnabled: true,
//             exportEnabled: true,
//             title: {
//                 text: "Area Chart",
//                 fontFamily: 'calibri'
//             },
//             axisY: {
//                 title: "",
//                 // includeZero: false,
//             },
//             data: [
//                 {
//                     type: "area",
//                     xValueFormatString: "YYYY",
//                     yValueFormatString: "#,##0.## Million",
//                     dataPoints: [
//                         { x: new Date(2017, 0), y: 7.6, color: '#22C5BB' },
//                         { x: new Date(2016, 0), y: 7.3, color: '#4ACFAF' },
//                         { x: new Date(2015, 0), y: 6.4, color: '#4DDC9E' },
//                         { x: new Date(2014, 0), y: 5.3, color: '#4ACFAF' },
//                         { x: new Date(2013, 0), y: 4.5, color: '#4ACFAF' },
//                         { x: new Date(2012, 0), y: 3.8, color: '#4ACFAF' },
//                         { x: new Date(2011, 0), y: 3.2, color: '#4ACFAF' }
//                     ],

//                 }
//             ],

//         }

//         return (
//             <div style={{ width: "50%" }}>
//                 <CanvasJSChart options={options}
//                 /* onRef={ref => this.chart = ref} */
//                 />
//                 {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//             </div>
//         );
//     }
// }

// export default AreaChart;



import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const BarDiagram = () => {
  let state = {
    dataBar: {
      labels: ["Paper", "Reviews", "Orders", "Views"],
      datasets: [
        {
          label: "% of Votes",
          data: [12, 19, 3, 5],
          backgroundColor: [
            "#22C5BB",
            "#4ACFAF",
            "#4DDC9E",
            "#45D87A",
          ],
          borderWidth: 2,
          borderColor: [
            "#119e95",
            "#36b496",
            "#35c586",
            "#35be67",
          ],
          hoverBackgroundColor: [
            "#119e95",
            "#36b496",
            "#35c586",
            "#35be67",
          ]
        }
      ]
    },
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      // scales: {
      //   xAxes: [
      //     {
      //       barPercentage: 1,
      //       gridLines: {
      //         display: true,
      //         color: "rgba(0, 0, 0, 0.1)"
      //       }
      //     }
      //   ],
      //   yAxes: [
      //     {
      //       gridLines: {
      //         display: true,
      //         color: "rgba(0, 0, 0, 0.1)"
      //       },
      //       ticks: {
      //         beginAtZero: true
      //       }
      //     }
      //   ]
      // }
    }
  }
  return (
    <div style={{ width: '100%', height: "100%" }}>
      <Bar data={state.dataBar} options={state.barChartOptions} />
    </div>
  );

}

export default BarDiagram;