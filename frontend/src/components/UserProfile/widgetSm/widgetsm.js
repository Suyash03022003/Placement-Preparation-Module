import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './widgetsm.css';

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
          labels: ['Array', 'Linked List', 'String', 'Graph', 'Trees', 'Page F', 'Page G'],
          datasets: [{
            label: 'Progress',
            data: [100, 20, 80, 60, 50, 40, 20],
            // barThickness: 6,
            backgroundColor: [
              'rgba(154, 208, 245, 0.8)',
              'rgba(154, 208, 245, 0.8)',
              'rgba(154, 208, 245, 0.8)',
              'rgba(154, 208, 245, 0.8)',
              'rgba(154, 208, 245, 0.8)',
              'rgba(154, 208, 245, 0.8)',
              'rgba(154, 208, 245, 0.8)'
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
          scales: {
            y: {
              beginAtZero: true
            }
          }
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
      <span className="widgetSmTitle">Data Structures</span>
      <canvas ref={chartRef} className="widgetCanvas"></canvas>
    </div>
  );
};

export default WidgetSm;
