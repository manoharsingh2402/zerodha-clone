import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row align-items-center text-center">
        <img
          src="/media/images/homeHero.png"
          alt="Hero Image"
          className="img-fluid mb-4"
        />
        <h1 className="display-4 mt-5">Invest in everything</h1>
        <p className="lead">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="btn btn-primary fs-5 p-2"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
