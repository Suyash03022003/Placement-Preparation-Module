import React from 'react';
import "./widgetsm.css";
import {
    XAxis,
    YAxis,
    Legend,
    CartesianGrid,
    Tooltip,
    Bar,
    BarChart,
} from "recharts";

function widgetsm() {

    const data = [
        {
            "name": "Array",
            "uv": 100,

        },
        {
            "name": "Linked List",
            "uv": 80,

        },
        {
            "name": "String",
            "uv": 60,

        },
        {
            "name": "Graph",
            "uv": 0,

        },
        {
            "name": "Tress",
            "uv": 50,

        },
        {
            "name": "Page F",
            "uv": 40,

        },
        {
            "name": "Page G",
            "uv": 20,

        }
    ];
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Data Structures</span>
            <BarChart width={600} height={350} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar dataKey="uv" fill="#82ca9d" width={10} />
            </BarChart>
        </div>
    )
}

export default widgetsm
