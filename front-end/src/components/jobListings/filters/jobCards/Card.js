import React from "react";
import save from "./saved.png";

const Card = () => {
  return (
    <div className="container">
      <div className="row w-100 bg-light">
        <div className="col-1 d-flex flex-column align-items-center">
          <img src={save} alt="save icon" className="" />
          <p className="text-secondary text-center">Save</p>
        </div>
        <div className="col-4">
          <p className="text-secondary">Job Title: Assitant Baker</p>
          <p className="text-secondary">Company: Le Ciel Bakery</p>
          <p className="text-secondary">Job Type: Full-Time</p>
        </div>
        <div className="col-4">
          <p className="text-secondary">Images of Workplace :</p>
        </div>
        <div className="col-3 border-start">
          <p className="text-secondary">Suited For</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
