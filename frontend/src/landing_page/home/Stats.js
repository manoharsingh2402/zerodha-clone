import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-3">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with Confidence</h1>
          <h2 className="fs-4">Customer first always</h2>
          <p className="text-muted">
            That's why 1.5+ crore customers trust Zerodha with $3.5+ lakh crores
            worth of equity investments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks,spam,"gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Zerodha Universe</h2>
          <p className="text-muted">
            Not just an app,but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate better financial decisions, we help you make them.
          </p>
        </div>
        <div className="col-6 p-5">
          <img
            src="/media/images/ecosystem.png"
            alt="Stats"
            className="img-fluid"
            style={{ width: "90%" }}
          />
          <div className="text-center p-5">
            <a href="" className="mx-4" style={{ textDecoration: "none" }}>
              Explore our products <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              Try Kite demo<i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
