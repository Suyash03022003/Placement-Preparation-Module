import React from 'react'
import "./DsaSyllabus.css";
// import "../Sidebar.js"
import Sidebar from '../Sidebar.js';
function DsaSyllabus() {
    return (
        <div>
            <div className='dsa-syllabus-container'>
                <Sidebar />
                <div className="dsa-inner-container">
                    <div>
                        <div>
                            <div className="dsa-heading">
                                <h1>Code ! Compete ! Conquer !</h1>
                                <br />
                                <h4 style={{ 'color': '#5fa1ff', "fontWeight": '20px', }} >Your Path to Placements Starts Now !</h4>
                            </div>
                        </div>

                    <div>
                        <div className="dsa-image">
                            <img src={process.env.PUBLIC_URL + "/images/dsa-front.png"} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="timeline">
                <div class="timeline-container timeline-left">
                    <div class="timeline-content">
                        <h2>Week 1</h2>
                        <h4>Basics of Strings and Arrays</h4>
                    </div>
                </div>
                <div class="timeline-container timeline-right">
                    <div class="timeline-content">
                        <h2>Week 2</h2>
                        <h4>Searching and Sorting</h4>
                    </div>
                </div>
                <div class="timeline-container timeline-left">
                    <div class="timeline-content">
                        <h2>Week 3</h2>
                        <h4>Hash Maps</h4>
                    </div>
                </div>
                <div class="timeline-container timeline-right">
                    <div class="timeline-content">
                        <h2>Week 4</h2>
                        <h4>2D arrays and linked lists</h4>
                    </div>
                </div>
                <div class="timeline-container timeline-left">
                    <div class="timeline-content">
                        <h2>Week 5</h2>
                        <h4>Stacks and Queues</h4>
                    </div>
                </div>
                <div class="timeline-container timeline-right">
                    <div class="timeline-content">
                        <h2>Week 6</h2>
                        <h4>Recursion</h4>
                    </div>
                </div>
                <div class="timeline-container timeline-left">
                    <div class="timeline-content">
                        <h2>Week 7</h2>
                        <h4>Trees and binary Search Trees</h4>
                    </div>
                </div>
                <div class="timeline-container timeline-right">
                    <div class="timeline-content">
                        <h2>Week 8 & 9</h2>
                        <h4>Dynamic Programming</h4>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default DsaSyllabus