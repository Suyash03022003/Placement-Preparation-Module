import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import './ContributionGraph.css'; 

const ContributionGraph = () => {
    const startDate = new Date('2023-01-01');
    const endDate = new Date('2023-12-31');
    const data = generateSampleData(startDate, endDate);

    return (
        <div className="contribution-graph">
            <h3 className="user-chartTitle">Daily Usage</h3>
            <CalendarHeatmap
                startDate={startDate}
                endDate={endDate}
                values={data}
                classForValue={(value) => {
                    if (!value) {
                        return 'color-empty';
                    }
                    return `color-github-${value.count}`;
                }}
                onClick={(value) => console.log(value)}
            />
        </div>
    );
};

const generateSampleData = (startDate, endDate) => {
    const currentDate = new Date(startDate);
    const values = [];
    while (currentDate <= endDate) {
        const count = Math.floor(Math.random() * 4);
        values.push({ date: currentDate.toISOString().slice(0, 10), count });
        currentDate.setDate(currentDate.getDate() + 1);
    }
    return values;
};

export default ContributionGraph;
