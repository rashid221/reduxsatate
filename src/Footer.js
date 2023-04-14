import React, { useState } from 'react';

function Footer(props) {
    const [email,setEmail]= useState('');
    const [msg,setMsg]=useState('');
    const handleEmail=(e)=>{
       setEmail(e.target.value);
    }
    const emailValidation=()=>{
        const regEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if(regEx.test(email)){
            setMsg("Email is valid")
        }
        else if(!regEx.test(email) && email !== ""){
            setMsg("Email is not valid")
            alert("Email is not valid");
        }
        else{
            setMsg("")
        }
    }
    return (
        <div style={{backgroundColor:'#0656FE',width:'100%',height:'40vh',flexDirection:'column',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <h1 style={{fontSize:'3.4rem',fontWeight:'bold',color:'white'}}>Get in Touch</h1>
            <p className='mt-3' style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br>
sed do eiusmod tempor incididunt ut labore et dolore magna</p>
<div style={{borderTopLeftRadius:'65rem',width:'30%'}} className="input-group input-group-lg mt-5">
   
   <input style={{borderTopLeftRadius:'65rem',borderBottomLeftRadius:'65rem'}} onChange={handleEmail} value={email} placeholder='Enter your email' type="text" className="form-control ps-5 pe-5 pt-4 pb-4" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
  <span style={{borderTopRightRadius:'65rem',borderBottomRightRadius:'65rem'}} className="input-group-text" id="inputGroup-sizing-lg"><button onClick={emailValidation} style={{borderRadius:'65rem'}} className='btn btn-primary pt-3 pb-3'>Subscribe</button></span>

</div>
<h5>{msg}</h5>
        </div>
    );
}

export default Footer;