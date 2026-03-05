import React from "react";

function Universe() {
  return (
    <div className="container" style={{ color: "#424242" }}>
      <div className="row m-5">
        <p className="text-center" style={{ fontSize: "20px" }}>
          Want to know more about our technology stack? Check out the{" "}
          <a href="" className="text-decoration-none">
            Zerodha.tech
          </a>
          blog.
        </p>
      </div>
      <div className="row">
        <h2 className="mb-4 fs-4 text-center">The Zerodha Universe</h2>
        <p className="text-center fs-6">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div
        className="row mt-5 px-5"
        style={{ fontSize: "14px", color: "#9B9B9B" }}
      >
        <div className="col-3 mb-4">
          <div className="d-flex flex-column align-items-center mb-5 p-1">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="Smallcase Logo"
              className="img-fluid"
              style={{ width: "70%" }}
            />
            <span className="mt-3 text-center">
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </span>
          </div>
          <div className="d-flex flex-column align-items-center mt-5 p-1">
            <img
              src="media/images/streakLogo.png"
              alt="Smallcase Logo"
              className="img-fluid"
              style={{ width: "70%" }}
            />
            <span className="mt-3 text-center">
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </span>
          </div>
        </div>
        <div className="col-1 mb-4"></div>

        <div className="col-3 mb-4">
          <div className="d-flex flex-column align-items-center mb-5 p-1">
            <img
              src="media/images/sensibullLogo.svg"
              alt="Smallcase Logo"
              className="img-fluid"
              style={{ width: "70%" }}
            />
            <span className="mt-3 text-center">
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </span>
          </div>
          <div className="d-flex flex-column align-items-center mt-5 p-1">
            <img
              src="media/images/smallcaseLogo.png"
              alt="Smallcase Logo"
              className="img-fluid"
              style={{ width: "70%" }}
            />
            <span className="mt-3 text-center">
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </span>
          </div>
        </div>

        <div className="col-1 mb-4"></div>

        <div className="col-3 mb-4">
          <div className="d-flex flex-column align-items-center mb-5 p-1">
            <img
              src="media/images/tijori.svg"
              alt="Smallcase Logo"
              className="img-fluid"
              style={{ width: "55%" }}
            />
            <span className="mt-3 text-center">
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </span>
          </div>
          <div className="d-flex flex-column align-items-center mt-5 p-1">
            <img
              src="media/images/dittoLogo.png"
              alt="Smallcase Logo"
              className="img-fluid"
              style={{ width: "50%" }}
            />
            <span className="mt-3 text-center">
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </span>
          </div>
        </div>
      </div>
      <div className="row align-items-center text-center mb-5 mt-5">
        <button
          className="btn btn-primary fs-5 p-2"
          style={{ width: "20%", margin: "0 auto" }}  
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
