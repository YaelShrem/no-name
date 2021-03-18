import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
    const state = {
        dataLine: {
            labels: ["Paper", "Reviews", "Orders", "Views"],
            borderColor: [
                "#119e95",
                "#36b496",
                "#35c586",
                "#35be67",
            ],
            backgroundColor: [
                "#22C5BB",
                "#4ACFAF",
                "#4DDC9E",
                "#45D87A",
            ],
            datasets: [
                {
                    label: "Views",
                    fill: true,
                    lineTension: 0.1,
                    backgroundColor: "#c6f6d7",
                    borderColor: "#45D87A",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#45D87A",
                    pointBackgroundColor: "#45D87A",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [10, 48, 20, 19, 86, 100, 90]
                },
                {
                    label: "Paper",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: '#b1dbd9',
                    borderColor: "#22C5BB",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#22C5BB",
                    pointBackgroundColor: "#22C5BB",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: "Reviews",
                    fill: true,
                    lineTension: 0.5,
                    backgroundColor: "#c8f2e8",
                    borderColor: "#4ACFAF",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#4ACFAF",
                    pointBackgroundColor: "#4ACFAF",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [28, 48, 40, 19, 86, 27, 90]
                },
                {
                    label: "Orders",
                    fill: true,
                    lineTension: 1,
                    backgroundColor: "#8ce2bd",
                    borderColor: "#4DDC9E",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "#4DDC9E",
                    pointBackgroundColor: "#4DDC9E",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [100, 48, 15, 3, 6, 10, 90]
                },
             
            ]
        }
    };


    return (
        <div >
            <Line style={{height:'50px',width:'70px'}} data={state.dataLine} options={{ responsive: true }} />
        </div>
    );

}

export default LineChart;