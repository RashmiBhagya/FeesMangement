import React,{Component} from "react";
import "./sidebar.css"


export default class Sidebar extends Component{

render(){
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <br/>
                <h1 className="sidebarTitle"><b>Dashboard</b></h1>
                <ul className="sidebarList"active>
                    <li className="sidebarListItem ">
                    <button id="btn"><a href='/First' style={{textDecoration:'none',color:'black',fontWeight:'bold',Width:'40px'}}><i class="fa-solid fa-house"></i> &nbsp;Home</a></button>
                    </li>
                    <li className="sidebarListItem">
                    <button id="btn"><a href='/' style={{textDecoration:'none',color:'black',fontWeight:'bold',Width:'40px'}}>Student Fees</a></button>
                    </li>
                </ul>

                <br/>

                <h1 className="sidebarTitle"><b>Master List</b></h1>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                     <button id="btn"><a href='/s' style={{textDecoration:'none',color:'black',fontWeight:'bold',Width:'40px'}}> Courses and Fees</a></button>
                    </li>
                    <li className="sidebarListItem">
                    <button id="btn"><a href='/s' style={{textDecoration:'none',color:'black',fontWeight:'bold',Width:'40px'}}>Student</a></button>
                    </li>
                </ul>

                <br/>

                <h1 className="sidebarTitle"><b>Report</b></h1>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                      <button id="btn"><a href='/s' style={{textDecoration:'none',color:'black',fontWeight:'bold',Width:'40px'}}>Payment Reports</a></button>
                    </li>
                </ul>

                <br/>

                <h1 className="sidebarTitle"><b>Systems</b></h1>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                      <button id="btn"><a href='/UserList' style={{textDecoration:'none',color:'black',fontWeight:'bold',Width:'40px'}}><i class="fa-solid fa-circle-user"></i> &nbsp;Users</a></button>
                    </li>
                </ul>
            </div>
        </div>
        </div>
  )
}
}
