import "./featuredinfo.css";
import React, { Component } from "react";

export default class Featuredinfo extends Component{
  render() {
  return (
    <><br /><div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Number of Students</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1000</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Number of Courses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">10</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Payments</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">up to 1000</span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div></>
  );
}
}
