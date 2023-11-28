import React from 'react'
import "./DsaSyllabus.css";
function DsaSyllabus() {
    return (
        <div>
            <div className='dsa-syllabus-container'>
                <div className="dsa-inner-container">
                    <div className='RoadMapTop'>
                        <div className="dsa-heading">
                            <h1>Code !
                                Compete ! <br />
                                Conquer !</h1>
                            <br />
                            <h4 style={{ 'color': '#5fa1ff', "fontWeight": '20px', }} >Your Path to Placements Starts Now !</h4>
                        </div>

                        <div className="dsa-image">
                            <img src={process.env.PUBLIC_URL + "/images/dsa-front.png"} alt="DSABackgroundImage" />
                        </div>

                    </div>

                    <div className='RoadmapImageDiv'>
                        <img className='' src={process.env.PUBLIC_URL + "/images/roadmap-new.jpg"} style={{ "width": '350px', "height": '350px' }} alt="Image1" ></img>
                    </div>

                    <div className="dsa-heading">
                        <h2>DSA Roadmap</h2>
                    </div>
                    <div className="dsa-roadmap-img">
                        <img src={process.env.PUBLIC_URL + "/images/Desktop - 1.svg"} alt="DSABackgroundImage" />
                    </div>
                    {/* <div class="timeline">
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
                    </div> */}

                </div>
            </div>
        </div>
    );
}
export default DsaSyllabus