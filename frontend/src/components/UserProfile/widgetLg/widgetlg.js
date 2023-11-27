import React from 'react'
import "./widgetlg.css";
import {
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Tooltip,
    Bar,
    BarChart,
} from "recharts";

function widgetlg() {
    const data = [
        {
            "name": "Searching",
            "uv": 100,

        },
        {
            "name": "Sorting",
            "uv": 80,

        },
        {
            "name": "Divide&Conquer",
            "uv": 60,

        },
        {
            "name": "Greedy",
            "uv": 0,

        },
        {
            "name": "Backtracking",
            "uv": 50,

        },
        {
            "name": "Recursion",
            "uv": 40,

        },
        {
            "name": "Dynamic Programming",
            "uv": 20,

        }
    ];
   
    return (

        <div className="widgetLg">
            <h3 className="widgetLgTitle">Algorithms</h3>
            <BarChart width={600} height={350} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    )
}

export default widgetlg
