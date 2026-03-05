import React from "react";

function RightSection({
  imageURL,
  title,
  description,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row mb-5">
        
        
        <div className="col-4 p-5 mt-5">
          <h2 className="mt-3">{title}</h2>
          <p className="mt-5" style={{lineHeight:"1.8rem"}}>{description}</p>
          <div className="mt-3">
            <a href={learnMore} className="text-decoration-none">Learn More <i className="fa fa-long-arrow-right"></i></a>
          </div> 
        </div>  
        <div className="col-1"></div>
        <div className="col-6 p-5 ml-5">
          <img src={imageURL} alt={title} className="img-fluid" />
        </div> 
      </div>
    </div>
  );
}

export default RightSection;
