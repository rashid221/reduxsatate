import React from "react";
import ecllipse from "./images/Ellipse 3.png";
// import ecllipse from "./images/Ellipse 3.png";
// import ecllipse from "./images/Ellipse 3.png";
import taj1 from "./images/Rectangle 2 (1).png";
import taj from "./images/Rectangle 2.png";
import taj2 from "./images/Rectangle 2 (2).png";
import Footer from "./Footer";

function Popular(props) {
const mouseHandle = ()=>{

}
    return (
    <div className="ecl mt-5">
      <img className="imgs" src={ecllipse} alt="eclipse" />

      <div className="popular-main mt-5 pt-5">
        <h1
          style={{ fontSize: "3.4rem", fontWeight: "bold", color: "#0A1954" }}
        >
          Most Popular Tours <br></br>for You
        </h1>
  <div className="card-start mt-3">
        <div className="card-mains">
          <div className="card" onMouseOver={mouseHandle} style={{ width: "25rem",borderRadius:'2rem' }}>
            <img src={taj} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Oia Village Santorini Island Greece</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <button type="submit" style={{borderRadius:'1rem'}} className="btn me-5 ms-5 mb-5 pt-3 pb-3 pe-1 ps-1 mt-5  btn-outline-primary btn-lg">
        Book Now
      </button>
          </div>
        </div>
        <div className="card-mains">
          <div className="card " style={{ width: "25rem",borderRadius:'2rem' }}>
            <img src={taj1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Taj Mahal Agra,<br></br>India</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <button type="submit" style={{borderRadius:'1rem'}} className="btn me-5 ms-5 mb-5 pt-3 pb-3 pe-1 ps-1 mt-5  btn-outline-primary btn-lg">
        Book Now
      </button>
          </div>
        </div>
        <div className="card-mains">
          <div className="card" style={{ width: "25rem",borderRadius:'2rem' }}>
            <img src={taj2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Oia Village Santorini Island Greece</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <button type="submit" style={{borderRadius:'1rem'}} className="btn me-5 ms-5 mb-5 pt-3 pb-3 pe-1 ps-1 mt-5  btn-outline-primary btn-lg">
        Book Now
      </button>
          </div>
        </div>
        </div>
<div style={{width:'100%',display:'flex',alignItems:'center',flexDirection:'column',justifyContent:'center'}}> 
        <button type="submit" style={{borderRadius:'1rem',width:'15rem'}} className="btn me-5 ms-5 mb-5 pt-3 pb-3 pe-1 ps-1 mt-5  btn-primary btn-lg">
       View All
      </button>
      <Footer/>
      </div>
      </div>
      
      
    </div>
    
  );
}

export default Popular;
<h1>Most Popular</h1>;
