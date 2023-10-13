import React from 'react'
import "./DsaSyllabus.css";
import "../Sidebar.js"
import Sidebar from '../Sidebar.js';
function DsaSyllabus() {
    return (


        <div className="Main-container">
            <Sidebar />
            <div>
                <div className="heading">
                    <h1>Power Your Dreams <br />with DSA Mastery!</h1>
                    <p> “Where Algorithms Shapes Futures -<br></br>
                        Your Journey to Success Begins Now” </p>
                    <div className='box'>
                        <div className='grid1'>
                            <div className='icon-container1'>
                                <img className='' src={process.env.PUBLIC_URL + "/images/tick.png"} style={{ "width": '40px', "height": '40px' }} ></img>
                            </div>
                            <div className='box-heading1'>
                                <h4>Quizzes</h4>
                            </div>
                        </div>
                        <div className='grid2'>
                            <div className='icon-container2'>
                                <img className='' src={process.env.PUBLIC_URL + "/images/business-analysis.png"} style={{ "width": '30px', "height": '30px' }}></img>
                            </div>
                            <div className='box-heading2'>
                                <h4>Performance Analysis</h4>
                            </div>
                        </div>
                        <div className='grid3'>
                            <div className='icon-container3'>
                                <img className='' src={process.env.PUBLIC_URL + "/images/structured-data.png"} style={{ "width": '40px', "height": '40px' }}></img>
                            </div>
                            <div className='box-heading3'>
                                <h4>DSA</h4>
                            </div>
                        </div>
                        <div className='grid4'>
                            <div className='icon-container4'>
                                <img className='' src={process.env.PUBLIC_URL + "/images/codingimg.png"} style={{ "width": '30px', "height": '30px' }}></img>
                            </div>
                            <div className='box-heading4'>
                                <h4>Coding</h4>
                            </div>
                        </div>

                    </div>

                </div>
                <button className='hoverbutton'> Explore More...</button>
            </div>
            <div>
                <div className="image">
                    <img src={process.env.PUBLIC_URL + "/images/Frontpg.gif"} alt="img" />

                </div>
            </div>
        </div>

    );
}
export default DsaSyllabus