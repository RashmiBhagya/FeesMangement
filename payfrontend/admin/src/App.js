import React, { Component } from "react";
import {BrowserRouter,Route, Routes} from "react-router-dom";
import CreatePost from "./components/CreatePost";
import EditPost from "./components/EditPost";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import PostDetails from "./components/PostDetails";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"
import Topbar from "./components/topbar/Topbar";
import First from "./components/first/First";
import UserList from "./components/users/UserList";
import CreateUser from "./components/CreateUser";

export default class App extends Component{
  render() {
    return (
      <BrowserRouter>
      <Topbar/>
         
      <div className="s">
           <Sidebar />
           
        <div className="others">
           

        
        <Routes>
          <Route exact path="/UserList"element={<UserList/>}/>
          <Route exact path="/First"element={<First/>}/>
          <Route exact path="/UserList" element={<CreateUser/>}/>
          <Route exact path="/add" element={<CreateUser/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/add" element={<CreatePost/>}/>
          <Route exact path="/edit/:id" element={<EditPost/>}/>
          <Route exact path="/post/:id" element={<PostDetails/>}/>
        </Routes>
       </div>
      </div>
      


 
      
     
      </BrowserRouter>
      
    )
  }
}
