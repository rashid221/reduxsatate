import React, { useState } from "react";
// import Pop from "./Pop";

function Selectbox(props) {
   const [count,setCount] = useState(0);
   const [val1,setVal1] = useState('');
   const [dat1,setDat1] = useState('');
   const [dat2,setDat2] = useState('');
  //  const [pops,setPops] = useState('');
  
   const ArrayCountry = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]
  //  let data;   
   const handlerForm = (e)=>{
        e.preventDefault();
        alert(`Destination selected: ${val1} No of members: ${count} Check in Date: ${dat1} Check out Date: ${dat2}`);
                }
   return (
    <>
       {/* <Pop datas={pops} /> */}
       <form className="select-box" action='' onSubmit={handlerForm}>  
       <div style={{display:'flex',flexDirection:'column'}}>
       <label for="exampleDataList" style={{fontSize:'1.4rem',fontWeight:'bold'}} class="form-label">Destination</label>
      <select  onChange={(e)=>setVal1(e.target.value)}
        style={{ border: "0.2rem solid #CAD6EC",borderRadius:'1rem',fontSize:'1.2rem', width: "100%" }}
        className="form-select pt-3 pb-3"
        aria-label="Default select example"
      >
        <option  selected>Select Location</option>
        {ArrayCountry.map((item,index)=><option  key={index+1}  value={item}>{item}</option>)}
        </select>
        </div>

        <div style={{display:'flex',flexDirection:'column'}}>
       <label for="exampleDataList" style={{fontSize:'1.4rem',fontWeight:'bold'}} class="form-label">Member</label>
      <div style={{  width: "100%" }} className="input-group">
  <input style={{ border: "0.2rem solid #CAD6EC",fontSize:'1.4rem',borderRadius:'1rem 0rem 0rem 1rem',textAlign:'center' }} type="text" onChange={(e)=>setCount(e.target.value)} placeholder={count} className="form-control pt-3 pb-3" aria-label="Dollar amount (with dot and two decimal places)" />
 
  <span className="input-group-text pe-4 ps-4" onClick={()=>{setCount(count+1)}} style={{fontSize:'1.8rem'}}>+</span>
  <span className="input-group-text pe-4 ps-4" onClick={()=>{if(count!==0){setCount(count-1)} else{setCount(count)}}} style={{fontSize:'1.8rem',borderRadius:'0rem 1rem 1rem 0rem'}}>-</span>
         </div>
         </div>

         <div style={{display:'flex',flexDirection:'column'}}>
       <label for="exampleDataList" style={{fontSize:'1.4rem',fontWeight:'bold'}} class="form-label">Check in Date</label>
         <div className="input-group" style={{  width: "100%" }}>
  <input type="date" className="form-control pt-3 pb-3" onChange={(e)=>setDat1(e.target.value)} style={{fontSize:'1.4rem',borderRadius:'1rem', border: "0.2rem solid #CAD6EC"}} aria-label="Dollar amount (with dot and two decimal places)" />
</div>
</div>

<div style={{display:'flex',flexDirection:'column'}}>
       <label for="exampleDataList" style={{fontSize:'1.4rem',fontWeight:'bold'}} class="form-label">Check out Date</label>
<div className="input-group" style={{  width: "100%" }}>
  <input type="date" className="form-control pt-3 pb-3" onChange={(e)=>setDat2(e.target.value)} style={{fontSize:'1.4rem',borderRadius:'1rem', border: "0.2rem solid #CAD6EC"}} aria-label="Dollar amount (with dot and two decimal places)" />
</div>
</div>

      <button type="submit" style={{borderRadius:'1rem'}} className="btn pt-3 pb-3 pe-5 ps-5 mt-5  btn-primary btn-lg">
        Book Now
      </button>

    </form>    
    </>  );
}

export default Selectbox;
