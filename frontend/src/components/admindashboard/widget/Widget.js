import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import ReviewsIcon from '@mui/icons-material/Reviews';

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 70;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "TOTAL USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <PersonOutlinedIcon
                        className="admin-icon"
                        style={{
                            color: "crimson",
                            backgroundColor: "rgba(255, 0, 0, 0.2)",
                        }}
                    />
                ),
            };
            break;
        case "active-user":
            data = {
                title: "ACTIVE USERS",
                isMoney: false,
                link: "View all Users",
                icon: (
                    <ManageAccountsIcon
                        className="admin-icon"
                        style={{
                            backgroundColor: "rgba(0, 128, 0, 0.2)",
                            color: "green",
                        }}
                    />
                ),
            };
            break;

        case "unsubcribed":
            data = {
                title: "UNSUBCRIBED USERS",
                isMoney: true,
                link: "See details",
                icon: (
                    <PersonOffIcon
                        className="admin-icon"
                        style={{
                            backgroundColor: "rgba(128, 0, 128, 0.2)",
                            color: "purple",
                        }}
                    />
                ),
            };
            break;
        case "useractive":
            data = {
                title: "SITE VIEWS",
                isMoney: true,
                link: "View details",
                icon: (
                    <ReviewsIcon
                        className="admin-icon"
                        style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
                    />
                ),
            };
            break;
        default:
            break;
    }
    return (
        <div className="admin-widget">
            <div className="admin-left">
                <span className="admin-title">{data.title}</span>
                <span className="counter">{data.isMoney} {amount}</span>
                <span className="admin-link">{data.link}</span>
            </div>
            <div className="admin-right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    {diff} %
                </div>
                {data.icon}
            </div>

        </div>
    );
};

export default Widget;
