import React, { useState, useEffect } from 'react';
import "./frontPage.css";
import { Link } from "react-router-dom";
import Slidingcard from "../Slidingcard/Slidingcard";
import ChatBot from '../ChatBot/Chatbot.js';
import { useCookies } from 'react-cookie';
import axios from 'axios'; 

function FrontPage() {
    const [formData, setFormData] = useState({});

    // const[firstname, setFirstname] = useState('');
    // const[email, setEmail] = useState('');
    // const[query, setQuery] = useState('');

    // const handleSubmit = async (e) => {
    //     try {
    //       const response = await axios.post('http://localhost:5000/feed', { name: firstname, email: email, query: query });
    //       setFirstname('');
    //       setEmail('');
    //       setQuery('');
    //       alert('Feedback given successfully!');
    //     } catch (error) {
    //       alert('Failed');
    //     }
    //   };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ 
            ...formData, 
            [name]: value 
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                name: formData.name,
                email: formData.email,
                query: formData.query
            }
            const response = await axios.post('http://localhost:5000/feed', data);
            setFormData({});
            alert('Thanks for your feedback!');
        } catch (error) {
            alert('An error occured!');
        }
    };

    const [cookies, setCookie] = useCookies(['user']);
    const [fname, setFname] = useState("");


    const handleLinkClick = (link) => {
        // setActiveLink(link);
        // setShowMediaIcon(false);
    };

    useEffect(() => {
        if (cookies.user && cookies.user.name) {
            const gettingFirstName = cookies.user.name.split(" ")[0];
            setFname(gettingFirstName);
        }
    }, [cookies.user]);


    const faqData = [
        {
            question: 'What about language support?',
            answer:
                'We support a list of the main languages: Javascript, Ruby, Python, C#, Java, PHP, C, C++, Objective-C, Swift, Elixir, Typescript, Bash, Clojure, Haskell, Go and Coffeescript and many more.',
        },
        {
            question: 'Do I need to be technical to use this?',
            answer:
                'Not at all, if you dont know the first thing about computers this will still work for you. Our system evaluates your prospective developers code and programming aptitude',
        },
        {
            question: 'What is the difficulty level of questions?',
            answer:
                'The difficulty level of questions is variable. There are questions ranging from easy to difficult levels and hence gives the students a chance to test all kinds of waters.',
        },


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
                        <h1>Power Your Dreams with DSA Mastery!</h1>
                        <p> “Where Algorithms Shapes Futures -<br />
                            Your Journey to Success Begins Now” </p>
                        <div className='outsideBox'>
                            <div className='box'>
                                <Link to='/user/Quizzes'>
                                    <div className='grid1'>
                                        <div className='icon-container1'>
                                            <img className='' src={process.env.PUBLIC_URL + "/images/tick.png"} style={{ "width": '40px', "height": '40px' }} alt="Image1" ></img>
                                        </div>
                                        <div className='box-heading1'>
                                            <h4>Quizzes</h4>
                                        </div>
                                    </div>
                                </Link>

                                <Link to={fname !== "" ? "/user/profile" : "/login"}>
                                    <div className='grid2'>
                                        <div className='icon-container2'>
                                            <img className='' src={process.env.PUBLIC_URL + "/images/business-analysis.png"} style={{ "width": '30px', "height": '30px' }} alt="Image2" ></img>
                                        </div>
                                        <div className='box-heading2'>
                                            <h4>Performance Analysis</h4>
                                        </div>
                                    </div>
                                </Link>

                                <Link to={fname !== "" ? "/user/learnDSA" : "/login"}>
                                    <div className='grid3'>
                                        <div className='icon-container3'>
                                            <img className='' src={process.env.PUBLIC_URL + "/images/structured-data.png"} style={{ "width": '40px', "height": '40px' }} alt="Image3" ></img>
                                        </div>
                                        <div className='box-heading3'>
                                            <h4>DSA</h4>
                                        </div>
                                    </div>
                                </Link >
                                <Link to='/user/programming'>
                                    <div className='grid4'>
                                        <div className='icon-container4'>
                                            <img className='' src={process.env.PUBLIC_URL + "/images/codingimg.png"} style={{ "width": '30px', "height": '30px' }} alt="img"></img>
                                        </div>
                                        <div className='box-heading4'>
                                            <h4>Coding</h4>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </div>
                        {/* <button className='hoverbutton'> Explore More...</button> */}
                    </div>
                </div>
                <div>
                    <div className="front-image">
                        <img className="front-image-img" src={process.env.PUBLIC_URL + "/images/Frontpg.gif"} alt="img" />
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
                            <Link to={fname !== "" ? "/user/profile" : "/login"} onClick={() => handleLinkClick('Login')}>
                                <button className='feature-button'>View</button>
                            </Link>
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
                            <Link to='/user/Quizzes'>
                                <button className='feature-button'>View</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='feature-square-card'>
                    <div className='features-inner-card'>
                        <div className='left'>
                            <img className='feature-icon' src={process.env.PUBLIC_URL + "/images/career.png"} alt="img" />
                        </div>
                        <div className='right'>
                            <div className='feature-inner-card-heading'>Complete Roadmap</div>
                            <Link to='/user/dsasyllabus'>
                                <button className='feature-button'>View</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* --------------Benefits wali image----------- */}
            <div className='benefit-div'>
                <h1 className='benefit-heading'>WHY PLACEMENT PREPARATION MODULE</h1>
                <div className='benefit-img-div'>
                    <img className=" benefits-img" src={process.env.PUBLIC_URL + "/images/benefits-img.png"} alt="img" />
                </div>
            </div>
            {/* ------------Start learning-------------------- */}
            <div className='start-learning-container'>
                <div className='start-learning-items-container'>
                    <div className='item-box1'>
                        <div className='image-container'>
                            <img src={process.env.PUBLIC_URL + "/images/data_structure_card.png"} alt="Data Structure" />
                        </div>
                        <div className='item-title'>
                            <h4>Data Structure</h4>
                            <Link to='/user/learnDSA'>
                                <button className='learning-button'>Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className='item-box2'>
                        <div className='image-container'>
                            <img src={process.env.PUBLIC_URL + "/images/algorithm_card_2-removebg-preview.png"} alt="Data Structure" />
                        </div>
                        <div className='item-title'>
                            <h4>Algorithm</h4>
                            <Link to='/user/learnDSA'>
                                <button className='learning-button'>Read More</button>
                            </Link>
                        </div>
                    </div>
                    <div className='item-box3'>
                        <div className='image-container'>
                            <img src={process.env.PUBLIC_URL + "/images/coding_card.png"} alt="Data Structure" />
                        </div>
                        <div className='item-title'>
                            <h4>Coding Problems</h4>
                            <Link to='/user/programming'>
                                <button className='learning-button'>Read More</button>
                            </Link>
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
                <h1>FEEDBACK ZONE</h1>
                <div className='form'>
                    <div className='form-content'>
                        <div className='form-image'>
                            <img src={process.env.PUBLIC_URL + "/images/contact_us_page.png"} alt="img" style={{ width: '700px', height: '475px' }} />
                        </div>

                        <div className='form-text'>
                            <div class="title">Welcome</div>
                            <div class="subtitle">"Speak, Shape, Improve Together!"</div>
                            <div class="input-container">
                                <input id="firstname" class="input" type="text" placeholder="Enter Name Here..."
                                value={formData.firstname}
                                name='name'
                                onChange={handleChange}/>
                            </div>
                            <div class="input-container">
                                <input id="email" class="input" type="text" placeholder="Enter Email Here.. " 
                                value={formData.email}
                                name='email'
                                onChange={handleChange}/>
                            </div>
                            <div class="input-container">
                                <input id="Query" class="input" type="text" placeholder="Enter Your Feedback Here... " 
                                value={formData.query}
                                name='query'
                                onChange={handleChange}/>
                            </div>
                            <button onClick={handleSubmit} class="submit">submit</button>
                        </div>
                    </div>
                </div>
            </form>

            <ChatBot />
        </div >
    );
}
export default FrontPage