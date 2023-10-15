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
                    <div className="dsa-heading">
                        <h1>Code ! Compete ! </h1>
                        <h1>Conquer !</h1>
                        <br />
                        <h4 style={{ 'color': '#5fa1ff', "fontWeight": '20px', }} >Your Path to Placements Starts Now !</h4>
                        <img src={process.env.PUBLIC_URL + "/images/roadmap-new.jpg"} style={{ "width": '30%', "padding": "130px", "marginTop": '70px' }} alt='img'/>
                    </div>
                </div>

                <div>
                    <div className="dsa-image">
                        <img src={process.env.PUBLIC_URL + "/images/dsa-front.jpg"}alt='img' />
                    </div>
                </div>
            </div>
            <div class="timeline">
                <div class="timeline-container timeline-left">
                    <div class="timeline-content">
                    <h2>2017</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
                <div class="timeline-container timeline-right">
                    <div class="timeline-content">
                    <h2>2016</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
                <div class="timeline-container timeline-left">
                    <div class="timeline-content">
                    <h2>2015</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
                <div class="timeline-container timeline-right">
                    <div class="timeline-content">
                    <h2>2012</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
                <div class="timeline-container timeline-left">
                    <div class="timeline-content">
                    <h2>2011</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
                <div class="timeline-container timeline-right">
                    <div class="timeline-content">
                    <h2>2007</h2>
                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                    </div>
                </div>
            </div>
    </div>           
</div>

    );
}
export default DsaSyllabus