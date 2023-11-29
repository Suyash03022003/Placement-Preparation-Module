import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../widgetSm/widgetsm.css';

const WidgetSm = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance;

    // Ensure the chartRef is not null before creating the chart
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      // Destroy previous chart instance, if any
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Searching', 'Sorting', 'Divide & Conquer', 'Greedy', 'Backtracking', 'Recursion', 'Dynamic Programming'],
          datasets: [{
            axis: 'y',
            label: 'Progress',
            data: [100, 80, 60, 30, 50, 80, 60],
            fill: false,
            backgroundColor: [
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)',
            ],
            borderColor: [
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)',
              'rgb(154, 208, 245)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          indexAxis: 'y',
        }
      });
    }

    // Cleanup function
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Algorithms</span>
      <canvas ref={chartRef} className="widgetCanvas"></canvas>
    </div>
  );
};

export default WidgetSm;
