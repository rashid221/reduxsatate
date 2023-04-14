import React from 'react';
import  travelafront from './images/tvl@4x 1.png';
import Navbar from './Navbar';
import Selectbox from './Selectbox';

function Main(props) {
    return (
        <div className='travel-main'>
            <img src={travelafront} alt="main back" />
            <Navbar/>
           <div className='travel-center'>
           
            <div className='inner-div'>
            <h1>Discover the world 
                <br></br>
                 with us</h1>
                 <button type="button" className="btn pt-3 pb-3 pe-5 ps-5 mt-5  btn-primary btn-lg">Start Tour</button>
                 </div>
                <Selectbox/>
                 </div>
                
                        </div>
    );
}

export default Main;