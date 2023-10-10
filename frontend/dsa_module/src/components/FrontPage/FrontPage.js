import React, { useState }  from 'react'
import "./frontPage.css";

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
        <div className="Main-container">
            <div className='left-side'>
                <div className="heading">
                    <h1>Power Your Dreams <br/>with DSA Mastery!</h1>
                    <p> “Where Algorithms Shapes Futures -<br></br>
                        Your Journey to Success Begins Now” </p>
                </div>
                <button className='button-1'> Hover Me</button>
            </div>
            <div className='right-side'>
                <div className="image">
                    <img src={process.env.PUBLIC_URL + "/images/output-onlinegiftools.gif"} alt="img" />
                </div>
            </div> 
        </div>
            
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
            <form className='contact-us-form'>
            <h1>STILL IN DOUBT?</h1>
            <div className='form-content'>                
                <div className='form-image'>
                    <img src={process.env.PUBLIC_URL + "/images/output-onlinegiftools.gif"} alt="img" style={{ width: '500px', height: '475px' }}/>
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
