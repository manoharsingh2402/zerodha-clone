import React from "react";

function LeftSection({
  imageURL,
  title,
  description,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-6 p-5 ml-5">
          <img src={imageURL} alt={title} className="img-fluid" />
        </div> 
        <div className="col-1"></div>
        <div className="col-4 p-5 mt-5">
          <h2 className="mt-3">{title}</h2>
          <p className="mt-5" style={{lineHeight:"1.8rem"}}>{description}</p>
          <div className="mt-3">
            <a href={tryDemo} className="text-decoration-none">Try Demo <i className="fa fa-long-arrow-right"></i></a>
            <a href={learnMore} style={{marginLeft:"45px"}} className="text-decoration-none">Learn More <i className="fa fa-long-arrow-right"></i></a>
          </div>
          <div className="mt-2 mr-5 p-2">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                width="40%"
              />
            </a>
            <a href={appStore} style={{marginLeft:"45px"}}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                width="40%"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
