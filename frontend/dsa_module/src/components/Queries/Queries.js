import React from 'react'
import "./Queries.css";

function Queries() {
    return (
        <div className='Container'>
            <div className='body'>
                <div className='card'>
                    <div className='Features-inner-card'>
                        <div className='left'>
                            <img className='icon' src={process.env.PUBLIC_URL + "/images/web-analytic1.png"} />
                        </div>
                        <div className='right'>
                            <div className='inner-card-heading'>"Automated Heading"</div>
                        </div>
                        <img className='icon-outer' src={process.env.PUBLIC_URL + "/images/circle.png"}></img>

                    </div>
                </div>
                <div className='card'>
                    <div className='Features-inner-card'>
                        <div className='left'>
                            <img className='icon' src={process.env.PUBLIC_URL + "/images/web-analytic1.png"} />
                        </div>
                        <div className='right'>
                            <div className='inner-card-heading'>"Automated Heading"</div>
                        </div>
                        <img className='icon-outer' src={process.env.PUBLIC_URL + "/images/circle.png"}></img>

                    </div>
                </div>
                <div className='card'>
                    <div className='Features-inner-card'>
                        <div className='left'>
                            <img className='icon' src={process.env.PUBLIC_URL + "/images/web-analytic1.png"} />
                        </div>
                        <div className='right'>
                            <div className='inner-card-heading'>"Automated Heading"</div>
                        </div>
                        <img className='icon-outer' src={process.env.PUBLIC_URL + "/images/circle.png"}></img>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Queries