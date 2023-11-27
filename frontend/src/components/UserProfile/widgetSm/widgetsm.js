import React from 'react';
import "./widgetsm.css";

const widgetsm = () => {
    const labels = ['Array', 'Linked List', 'String', 'Graph', 'Trees', 'Page F', 'Page G'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [100, 20, 80, 60, 50, 40, 20],
            barThickness: 6,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };
    
    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    };

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Data Structures</span>
            <div>
                {config}
            </div>
        </div>
    )
}

export default widgetsm
