import React from 'react';
import "./userdashboard.scss";

import UserWidget from "../UserWidget/userwidget";
import UserChart from "../UserChart/userchart";
import Piechart from "../Piechart/piechart";
import WidgetSm from "../widgetSm/widgetsm";
import WidgetLg from "../widgetLg/widgetlg";
import { userData } from "../dummydata";

const userdashboard = () => {
    return (
        <div className="user-home">
            <div className="user-homeContainer">
                <div className="user-widgets">
                    <UserWidget type="user" />
                    <UserWidget type="active-user" />
                    <UserWidget type="unsubcribed" />
                </div>
                <UserChart data={userData} title="User Analytics" grid dataKey="Active User" />
                {/* <Piechart /> */}
                <div className="homeWidgets">
                    <WidgetSm />
                    <WidgetLg />
                </div>

            </div>
        </div>
    )
}

export default userdashboard
