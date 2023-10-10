import React from 'react'
import "./frontPage.css";

function FrontPage() {
    return (
      
            <div className="Main-container">
                <div className='left-side'>
                    <div className="heading">
                        <h1>Power Your Dreams <br />with DSA Mastery!</h1>
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
   
    );
}
export default FrontPage
