import React from 'react';
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
import "./home.scss";
import Widget from "../widget/Widget";
import Featured from "../featured/Featured";
import Chart from "../chart/Chart";
import Table from "../table/Table";

const Home = () => {
    return (
        <div className="home">
            <AdminSidebar />
            <div className="homeContainer">
                <AdminNavbar />
                <div className="widgets">
                    <Widget type="user" />
                    <Widget type="active-user" />
                    <Widget type="unsubcribed" />
                    <Widget type="useractive" />

                </div>
                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
                <div className="listContainer">
                    <Table />
                </div>

            </div>
        </div>
    );
};

export default Home;
