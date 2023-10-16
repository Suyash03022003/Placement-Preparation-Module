import React, { useState } from 'react';
import "./Queries.css";

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
}

function Queries() {
    const [startDate, setStartDate] = useState(getDate());
    const [endDate, setEndDate] = useState(getDate());
    const [data, setData] = useState([
        {
            start: '2023-10-15',
            end: '2023-10-25',
        },
    ]);

    const startDateChange = (event) => {
        const { value } = event.target;
        setStartDate(value);
    };

    const endDateChange = (event) => {
        const { value } = event.target;
        setEndDate(value);
    };

    const addData = (event) => {
        event.preventDefault();
        const variable = {
            start: startDate,
            end: endDate
        };

        setTimeout(() => {
            setData([...data, variable]);
        }, 500);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Action</td>
                        <td>Id</td>
                        <td>Start Date</td>
                        <td>End Date</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>N/A</td>
                        <td>N/A</td>
                        <td>
                            <input
                                type="date"
                                onChange={startDateChange}
                            />
                        </td>
                        <td>
                            <input
                                type="date"
                                onChange={endDateChange}
                            />
                        </td>
                        <td>
                            <button type="submit" onClick={addData}>Save</button>
                        </td>
                    </tr>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td></td>
                            <td>{index + 1}</td>
                            <td>{row.start}</td>
                            <td>{row.end}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Queries;
