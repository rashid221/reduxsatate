import React from 'react';
import Gold1 from './images/gold@4x.png';
import Gold2 from './images/leaning towert@4x.png';
import Gold3 from './images/loiberty@4x.png';
import Gold4 from './images/big ben@4x.png';

function PlacesSection(props) {
    return (
        <div>
             <div className='place-main'>
                <div className='place-left'>
                <h1 style={{fontSize:'3.4rem',fontWeight:'bold',color:'#0A1954'}}>Beautiful Places of <br></br>the world</h1>
                </div>
                <div className='place-right'>
                    <button className='btn pt-3 pb-3 pe-5 ps-5 mt-5  btn-primary btn-lg'>View All</button>
                </div>

</div>
<div className='place-main mt-4'>
<div className='flex1'>
<img src={Gold1} alt='gold'/>
<h4>Golden Gate</h4>
</div>
<div className='flex1'>
<img src={Gold2} alt='gold'/>
<h4>Leaning Tower</h4>
    
</div>

<div className='flex1'>
<img src={Gold4} alt='gold'/>
<h4>Big Ben</h4>
</div>
<div className='flex1'>
<img src={Gold3} alt='gold'/>
<h4>Statue of Liberty</h4>
</div>

</div>
        </div>
    );
}

export default PlacesSection;