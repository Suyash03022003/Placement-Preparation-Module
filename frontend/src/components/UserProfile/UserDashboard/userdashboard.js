import React from 'react';
import "./userdashboard.scss";

import UserWidget from "../UserWidget/userwidget";
import UserChart from "../UserChart/userchart";
import WidgetSm from "../widgetSm/widgetsm";
import WidgetLg from "../widgetLg/widgetlg";
import { userData } from "../dummydata";
import ContributionGraph from "../Contribution Graph/ContributionGraph";

const userdashboard = () => {
    return (
        <div className="user-home">
            <div className="user-homeContainer">
                <div className="user-widgets">
                    <UserWidget type="user" />
                    <UserWidget type="active-user" />
                    <UserWidget type="unsubcribed" />
                </div>
                <ContributionGraph />
                <UserChart data={userData} title="User Analytics" grid dataKey="Active Time(Hr)" />
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
