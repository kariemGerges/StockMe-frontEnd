import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  TimeScale
} from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  TimeScale,
  CandlestickController,
  CandlestickElement
);

function StockChart({ data }) {

    // VWAP Line Chart Component Configuration
  //   const chartData = {
  //     labels: data.results.map(result => new Date(result.t).toLocaleDateString()),
  //     datasets: [{
  //       label: 'VWAP',
  //       data: data.results.map(result => result.vw),
  //       borderColor: 'rgb(255, 99, 132)',
  //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
  //     }]
  //   };

  // const chartRef = useRef(null); // Ref to store the current chart instance

  // useEffect(() => {
  //   // If there's a previous chart instance, destroy it to free up the canvas
  //   if (chartRef.current) {
  //     chartRef.current.destroy();
  //   }

  //   const ctx = document.getElementById('candlestickChart').getContext('2d');
  //   chartRef.current = new ChartJS(ctx, { // Store the new chart instance
  //     type: 'candlestick',
  //     data: {
  //       labels: data.results.map(result => new Date(result.t).toLocaleDateString()),
  //       datasets: [{
  //         label: data.ticker,
  //         data: data.results.map(result => ({
  //           x: new Date(result.t),
  //           o: result.o,
  //           h: result.h,
  //           l: result.l,
  //           c: result.c
  //         })),
  //         borderColor: 'rgb(53, 162, 235)'
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         x: {
  //           type: 'time',
  //           time: {
  //             unit: 'day'
  //           }
  //         }
  //       }
  //     }
  //   });

  //   // Cleanup function to destroy the chart when the component unmounts
  //   return () => {
  //     if (chartRef.current) {
  //       chartRef.current.destroy();
  //     }
  //   };
  // }, [data]);

  // return (
  //   <div>
  //     <Line data={chartData} />
  //     <canvas id="candlestickChart"></canvas>
  //   </div>
  // );
}

export default StockChart;
