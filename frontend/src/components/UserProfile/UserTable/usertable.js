import React from 'react'
import "./usertable.css";

const usertable = () => {
    const Button = ({ type }) => {
        return <button className={"usertableButton " + type}>{type}</button>;
    };

    return (
        <div className="usertable-container">
            <h3 className="usertableTitle">Data Structures and Algorithm Status</h3>
            <br />
            <table className="userTable">
                <tr className="usertableTr">
                    <th className="usertableTh">Topic Name</th>
                    <th className="usertableTh">Start Date</th>
                    <th className="usertableTh">Status</th>
                </tr>
                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Array</span>
                    </td>
                    <td className="usertableDate">2 Jan 2023</td>
                    <td className="usertableStatus">
                        <Button type="Completed" />
                    </td>
                </tr>

                <tr className="usertableTr">
                    <td className="usertableUser">
                        <span className="usertableName">Linked List</span>
                    </td>
                    <td className="usertableDate">7 Jan 2023</td>
                    <td className="usertableStatus">
                        <Button type="Completed" />
                    </td>
                </tr>

                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">String</span>
                    </td>
                    <td className="usertableDate">1 Feb 2023</td>
                    <td className="usertableStatus">
                        <Button type="inProgress" />
                    </td>
                </tr>

                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Matrix/Grid</span>
                    </td>
                    <td className="usertableDate">5 Feb 2023</td>
                    <td className="usertableStatus">
                        <Button type="inProgress" />
                    </td>
                </tr>
                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Stack & Queue</span>
                    </td>
                    <td className="usertableDate">19 Feb 2023</td>
                    <td className="usertableStatus">
                        <Button type="Completed" />
                    </td>
                </tr>
                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Tree</span>
                    </td>
                    <td className="usertableDate">4 Mar 2023</td>
                    <td className="usertableStatus">
                        <Button type="inProgress" />
                    </td>
                </tr>
                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Graph</span>
                    </td>
                    <td className="usertableDate">28 Mar 2023</td>
                    <td className="usertableStatus">
                        <Button type="Incomplete" />
                    </td>
                </tr>
                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Searching Algorithm</span>
                    </td>
                    <td className="usertableDate">1 Apr 2023</td>
                    <td className="usertableStatus">
                        <Button type="inProgress" />
                    </td>
                </tr>
                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Sorting Algorithm</span>
                    </td>
                    <td className="usertableDate">10 Apr 2023</td>
                    <td className="usertableStatus">
                        <Button type="inProgress" />
                    </td>
                </tr>
                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Divide and Conquer</span>
                    </td>
                    <td className="usertableDate">28 Apr 2023</td>
                    <td className="usertableStatus">
                        <Button type="inProgress" />
                    </td>
                </tr>
                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Greedy Algorithm</span>
                    </td>
                    <td className="usertableDate">6 May 2023</td>
                    <td className="usertableStatus">
                        <Button type="Incomplete" />
                    </td>
                </tr>
                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Recursion</span>
                    </td>
                    <td className="usertableDate">18 May 2023</td>
                    <td className="usertableStatus">
                        <Button type="Incomplete" />
                    </td>
                </tr>
                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Backtracking</span>
                    </td>
                    <td className="usertableDate">2 Jun 2023</td>
                    <td className="usertableStatus">
                        <Button type="Incomplete" />
                    </td>
                </tr>
                <tr className="usertableTr">
                    <td className="usertableUser">

                        <span className="usertableName">Dynamic Programming</span>
                    </td>
                    <td className="usertableDate">26 Jun 2023</td>
                    <td className="usertableStatus">
                        <Button type="Incomplete" />
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default usertable
