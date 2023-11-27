import React from 'react'
import "./piechart.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
const piechart =() => {
  return (
    <div className="user-featured">
            <div className="user-feature-top">
                <h1 className="user-feature-title">Total Active Users</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="user-bottom">
                <div className="user-featuredChart">
                    <CircularProgressbar value={45} text={"45%"} strokeWidth={7} />
                </div>
                <p className="amount">45 / 100</p>
                <p className="user-desc">
                    45 % of the total users i.e 100 were actively using the placement preparation module                 </p>
                <div className="user-summary">
                    <div className="user-item">
                        <div className="user-itemTitle">Last Year</div>
                        <div className="user-itemResult negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="user-resultAmount">124</div>
                        </div>
                    </div>
                    <div className="user-item">
                        <div className="user-itemTitle">Last Month</div>
                        <div className="user-itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="user-resultAmount">24</div>
                        </div>
                    </div>
                    <div className="user-item">
                        <div className="user-itemTitle">Last Week</div>
                        <div className="user-itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="user-resultAmount">70</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default piechart

// import "./featured.scss";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

// const Featured = () => {
//     return (
//         <div className="featured">
//             <div className="top">
//                 <h1 className="feature-title">Total Active Users</h1>
//                 <MoreVertIcon fontSize="small" />
//             </div>
//             <div className="bottom">
//                 <div className="featuredChart">
//                     <CircularProgressbar value={45} text={"45%"} strokeWidth={7} />
//                 </div>
//                 <p className="amount">45 / 100</p>
//                 <p className="desc">
//                     45 % of the total users i.e 100 were actively using the placement preparation module                 </p>
//                 <div className="summary">
//                     <div className="item">
//                         <div className="itemTitle">Last Year</div>
//                         <div className="itemResult negative">
//                             <KeyboardArrowDownIcon fontSize="small" />
//                             <div className="resultAmount">124</div>
//                         </div>
//                     </div>
//                     <div className="item">
//                         <div className="itemTitle">Last Month</div>
//                         <div className="itemResult positive">
//                             <KeyboardArrowUpOutlinedIcon fontSize="small" />
//                             <div className="resultAmount">24</div>
//                         </div>
//                     </div>
//                     <div className="item">
//                         <div className="itemTitle">Last Week</div>
//                         <div className="itemResult positive">
//                             <KeyboardArrowUpOutlinedIcon fontSize="small" />
//                             <div className="resultAmount">70</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Featured;