import "./widgetLg.css";
import React,{Component} from "react";

export default class Widget extends Component{
 render(){ {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (

     <><br/><br /><div className="widgetLg">
          <h3 className="widgetLgTitle">Paid Details for enrolling Course</h3>
          <table className="widgetLgTable">
              <tr className="widgetLgTr">
                  <th className="widgetLgTh">Student</th>
                  <th className="widgetLgTh">Date</th>
                  <th className="widgetLgTh">Payment</th>
                  <th className="widgetLgTh">Status</th>
              </tr>
              <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                      <img
                          src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                          alt=""
                          className="widgetLgImg" />
                      <span className="widgetLgName">Rashmi Bhagya</span>
                  </td>
                  <td className="widgetLgDate">2 Jun 2022</td>
                  <td className="widgetLgAmount">2000</td>
                  <td className="widgetLgStatus">
                      <Button type="Approved" />
                  </td>
              </tr>
              <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                      <img
                          src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                          alt=""
                          className="widgetLgImg" />
                      <span className="widgetLgName">Shathishka Roshan</span>
                  </td>
                  <td className="widgetLgDate">2 April 2022</td>
                  <td className="widgetLgAmount">5000</td>
                  <td className="widgetLgStatus">
                      <Button type="Declined" />
                  </td>
              </tr>
              <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                      <img
                          src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                          alt=""
                          className="widgetLgImg" />
                      <span className="widgetLgName">Dilini Chethana</span>
                  </td>
                  <td className="widgetLgDate">2 July 2022</td>
                  <td className="widgetLgAmount">5000</td>
                  <td className="widgetLgStatus">
                      <Button type="Approved" />
                  </td>
              </tr>
              <tr className="widgetLgTr">
                  <td className="widgetLgUser">
                      <img
                          src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                          alt=""
                          className="widgetLgImg" />
                      <span className="widgetLgName">Navo Chinthakan</span>
                  </td>
                  <td className="widgetLgDate">2 Jun 2021</td>
                  <td className="widgetLgAmount">2000</td>
                  <td className="widgetLgStatus">
                      <Button type="Declined" />
                  </td>
              </tr>
          </table>
      </div></>
  );
}
}
}