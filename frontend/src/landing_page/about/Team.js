import React from "react";

function Team() {
  return (
    <div
      className="container"
      style={{ fontFamily: "Inter,sans-serif", color: "#424242"}}
    >
      <div className="row mb-3 p-2">
        <h2 className="fs-2 text-center">People</h2>
      </div>
      <div
        className="row text-decoration-none"
        style={{ margin: "0px 185.2px"}}
      >
        <div className="col-6 text-center" > 
            <img src="/media/images/nithinKamath.jpg" alt="Nithin Kamath" className="img-fluid rounded-circle mb-3" style={{ width: "295px", height: "295px", objectFit: "cover" }} />
            <h5 className="mt-3" style={{fontSize: "18px"}} >Nithin Kamath</h5>
            <p className="mt-3" style={{fontSize: "14px",margin:"14.4px 0px 15px"}}>Founder, CEO</p>
        </div> 

        <div
          className="col-6"
          style={{ lineHeight: "1.8", margin: "16px 0px 15px",fontSize:"16px" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen. He is also an avid reader and a self-taught guitarist.
          </p>
          <p>
            Connect on 
            <a href="" className="text-decoration-none">Homepage </a>/ 
            <a href="" className="text-decoration-none">TradingQnA</a> / 
            <a href="" className="text-decoration-none">Twitter</a> 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
