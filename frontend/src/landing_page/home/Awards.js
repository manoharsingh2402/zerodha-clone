import React from "react";

function Awards() {
  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img
            src="/media/images/largestBroker.svg"
            alt="Award 1"
            className="img-fluid mb-3"
          />
        </div>
        <div className="col-6 p-5 mt-3">
          <h1 className="display-5">Largest stock broker in India</h1>
          <p className="lead mb-4">
            2+ million Zerodha clients contribute to over 15% of retail order
            volumes in India daily by trading and investing in:{" "}
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>Stocks & Ipos</li>
                <li>Mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img
            src="/media/images/pressLogos.png"
            alt="Award 2"
            className="img-fluid mt-4"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
