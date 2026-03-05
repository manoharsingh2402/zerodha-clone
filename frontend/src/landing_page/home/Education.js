import React from "react";

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="media/images/education.svg"
            alt="Education"
            className="img-fluid"
            syle={{ width: "70%" }}
          />
        </div>

        <div className="col-6 mt-5">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p className="mb-3">
            Varsity, the largest online stock market education library in the
            world covering all aspects of equity and derivatives trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Versity<i className="fa fa-long-arrow-right"></i>
          </a>

          <p className="mb-3 mt-5">
            Trading Q&A ,the most active trading and investment company in India
            for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Trading Q&A<i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
