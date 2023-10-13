import React, { useState } from 'react'
import "./frontPage.css";
import Slidingcard from "../Slidingcard/Slidingcard";
function FrontPage() {

    const faqData = [
        {
            question: 'What is React?',
            answer:
                'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.',
        },
        {
            question: 'What is React?',
            answer:
                'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.',
        },
        {
            question: 'What is React?',
            answer:
                'React is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.',
        },

        // ... (other FAQ data)
    ];

    // State to keep track of the active FAQ item (which one is open)
    const [activeIndex, setActiveIndex] = useState(null);

    // Function to toggle the active FAQ item
    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            {/* ------------First container quote + image-----------------  */}
            <div className="Main-container">
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
            {/* -----------Slinding images--------------- */}
            <div>
                <Slidingcard />
            </div>
            {/*-------Features of website--------- */}

            <div className='feature-card'>
                <div className='feature-square-card'>

                    <div className='features-inner-card'>
                        <div className='left'>
                            <img className='feature-icon' src={process.env.PUBLIC_URL + "/images/web-analytic1.png"} alt="img" />
                        </div>
                        <div className='right'>
                            <div className='feature-inner-card-heading'>Automated Reports</div>
                            <button className='feature-button'>View</button>
                        </div>
                    </div>
                </div>
                <div className='feature-square-card'>
                    <div className='features-inner-card'>
                        <div className='left'>
                            <img className='feature-icon' src={process.env.PUBLIC_URL + "/images/programmer.png"} alt="img" />
                        </div>
                        <div className='right'>
                            <div className='feature-inner-card-heading'>Quizzes & Coding</div>
                            <button className='feature-button'>View</button>
                        </div>
                    </div>
                </div>
                <div className='feature-square-card'>
                    <div className='features-inner-card'>
                        <div className='left'>
                            <img className='feature-icon' src={process.env.PUBLIC_URL + "/images/career.png"} alt="img" />
                        </div>
                        <div className='right'>
                            <div className='feature-inner-card-heading'>Roadmap</div>
                            <button className='feature-button'>View</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* --------------Benefits wali image----------- */}
            <div className='benefits-img'>
                <img src={process.env.PUBLIC_URL + "/images/benefits-img.png"} alt="img" />
            </div>
            {/* ------------Start learning-------------------- */}
            <div className='start-learning-container'>
                <div className='start-learning-items-container'>
                    <div className='item-box1'>
                        <img src={process.env.PUBLIC_URL + "/images/ds.png"} alt="img" style={{ "position": 'absolute', "height": '250px', "width": '260px', "borderRadius": '10px' }} />
                        <div className='item-title'>
                            <h4>Data Structure</h4>
                            <button style={{ "align": 'center' }}>Read More</button>

                        </div>
                    </div>
                    <div className='item-box2'>
                        <img src={process.env.PUBLIC_URL + "/images/algo.png"} alt="img" style={{ "position": 'absolute', "height": '250px', "width": '260px', "borderRadius": '10px' }} />
                        <div className='item-title'>
                            <h4>Algorithm</h4>
                            <button style={{ "align": 'center' }}>Read More</button>
                        </div>
                    </div>
                    <div className='item-box3'>
                        <img src={process.env.PUBLIC_URL + "/images/dsa.jpg"} alt="img" style={{ "position": 'absolute', "height": '250px', "width": '260px', "borderRadius": '10px' }} />
                        <div className='item-title'>
                            <h4>Coding Problems</h4>
                            <button style={{ "align": 'center' }}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>



            {/* -------------Frequently asked questions---------------------- */}
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                <ul className="faq-list">
                    {faqData.map((faq, index) => (
                        <li key={index} className={`faq-item ${index === activeIndex ? 'active' : ''}`}>
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                <span className='arrow'> &#9660; </span>
                            </div>
                            {index === activeIndex && (
                                <div className="faq-answer">
                                    <span className={`dropdown-icon ${index === activeIndex ? 'active' : ''}`}></span>
                                    {faq.answer}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            {/* --------------Contact us------------- */}
            <form className='contact-us-form'>
                <h1>STILL IN DOUBT?</h1>
                <div className='form-content'>
                    <div className='form-image'>
                        <img src={process.env.PUBLIC_URL + "/images/output-onlinegiftools.gif"} alt="img" style={{ width: '475px', height: '475px' }} />
                    </div>

                    <div className='form-text'>
                        <div class="title">Welcome</div>
                        <div class="subtitle">Let's create your account!</div>
                        <div class="input-container">
                            <input id="firstname" class="input" type="text" placeholder="First name" />
                        </div>
                        <div class="input-container">
                            <input id="contact" class="input" type="text" placeholder="Contact Number " />
                        </div>
                        <div class="input-container">
                            <input id="email" class="input" type="text" placeholder="Email " />
                        </div>
                        <button type="text" class="submit">submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default FrontPage
