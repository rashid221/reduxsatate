import React from 'react';
import frame from './images/Frame 77.png';

function AmazeSection(props) {
    return (
        <div>
            <div className='amaze-main'>

            <div className='amaze-left'>
            <img src={frame} alt="frame image" />
            </div>
            <div className='amaze-right'>
            <h1 style={{fontSize:'3.4rem',fontWeight:'bold',color:'#0A1954'}}>Amazing Places to <br></br>Enjoy your travel</h1>
            <p className='mt-3' style={{color:'grey',fontSize:'1.4rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do eiusmod tempor incididunt ut labore et dolore magna<br></br> aliqua. Ut enim ad minim veniam</p>
            <button type="button" style={{border:'2px solid #0656FE',color:'#0656FE',fontWeight:'bold'}} class="btn pt-3 pb-3 pe-5 ps-5 mt-5  btn-outline-primary btn-lg" disabled>Explore More</button>
            </div>
            </div>
        </div>
    );
}

export default AmazeSection;