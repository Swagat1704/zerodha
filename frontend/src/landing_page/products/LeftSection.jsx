import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 ">
          <img src={imageURL} alt="" />
        </div>
        
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo}style={{ textDecoration:"none"}}>Try Demo <i className="fa fa-long-arrow-right "aria-hidden="true"></i></a>
            <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i className="fa fa-long-arrow-right "aria-hidden="true"></i></a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              <img src="/assets/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore}style={{marginLeft:"50px"}}>
              <img src="/assets/appstoreBadge.svg" alt="" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
