import React from 'react'
import "./DsaSyllabus.css";
import RoadMap from '../../assets/Roadmap.png'; 
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

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
                        <Link to={'/user/learnDSA/content/Array'} className='dsa-syllabus-array-link'>skjsvjhw</Link>
                        <Link to={'/user/learnDSA/content/Stack'} className='dsa-syllabus-stackQueues-link'>skjsvjhw</Link>
                        <Link to={'/user/learnDSA/content/Linked%20List'} className='dsa-syllabus-linkedList-link'>skjsvjhw</Link>
                        <img src={RoadMap} alt='roadMapImage' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DsaSyllabus