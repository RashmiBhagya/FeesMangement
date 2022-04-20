import React, { Component } from "react";
import "./first.css";
import Featuredinfo from "../../components/featuredinfo/Featuredinfo";
import Widget from "../../components/widgetLg/Widget";


export default class First extends Component{
  render() {
  return (
    <div className="h">
       <Featuredinfo/>
       <div className="homeWidgets">
        <Widget/>
      </div>
    </div>
  )
}
}
