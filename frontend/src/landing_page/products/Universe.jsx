import React from "react";

const Universe = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="/assets/smallcaseLogo.png" alt="" />
          <p className="text-small text-muted mt-3">
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
          <img src="/assets/smallcaseLogo.png" alt="" style={{marginTop:"5rem"}} />
          <p className="text-small text-muted mt-3">
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="assets\zerodhaFundhouse.png"
            alt=""
            style={{ width: "45%" }}
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
          <img
            src="assets\zerodhaFundhouse.png"
            alt=""
            style={{ width: "45%", marginTop: "5rem" }}
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
       <div className="col-4 p-3 mt-5">
          <img
            src="assets\zerodhaFundhouse.png"
            alt=""
            style={{ width: "45%" }}
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
          <img
            src="assets\zerodhaFundhouse.png"
            alt=""
            style={{ width: "45%", marginTop: "5rem" }}
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mt-5 mb-5' style={{width:"20%" , margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  );
};

export default Universe;
