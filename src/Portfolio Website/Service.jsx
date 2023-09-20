import React from "react";
import Web1Cards from "./Web1Cards";
import WebsiteData from "./WebsiteData";
const Service = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row">
              <div className="col-md-12 my-4 text-center">
                <h1 className="service_header">Our Services</h1>
              </div>
            </div>
            <div className="row mb-4  gy-4">
                {WebsiteData.map((value, index) => {
                  return (
                    <Web1Cards
                      id={index}
                      key={index}
                      img={value.img}
                      title={value.title}
                      description={value.discription}
                      btnlink={value.btnlink}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
