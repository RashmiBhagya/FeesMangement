import React, { Component } from "react";
import axios from "axios";


export default class CreateUser extends Component {
 
    constructor(props){
      super(props);
      this.state={
        UserID:"",
        Name:"",
        UserName:"",
        Type:"",
        Date:""
      }
    }
  
    handleInputChange=(e)=>{
       const{name,value}=e.target;

       this.setState({
         ...this.state,
         [name]:value
       })
      }

    onSubmit=(e)=>{
     e.preventDefault();
     const {UserID,Name,UserName,Type,Date}=this.state;

     const data={
       UserID:UserID,
       Name:Name,
       UserName:UserName,
       Type:Type,
       Date:Date,
     }

     console.log(data)

     axios.post('/post/save',data).then((res)=>{
       if(res.data.success){
         this.setState({
          UserID:"",
          Name:"",
          UserName:"",
          Type:"",
          Date:""
         }
         )
     }
    
    })
  }

  render(){
    return(
     <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal"style={{color:'blue'}}><b><center>Create New User</center></b></h1>
        
          <form className="needs-validation" noValidate>


          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>UserID</b></label>
              <input type="text"
              className="form-control"
              name="UserID"
              placeholder="Enter UserID"
              value={this.state.UserID}
              onChange={this.handleInputChange}/>
            </div>
             
          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Name</b></label>
              <input type="text"
              className="form-control"
              name="Name"
              placeholder="Enter Name"
              value={this.state.Name}
              onChange={this.handleInputChange}/>
            </div>


         <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>UserName</b></label>
              <input type="text"
              className="form-control"
              name="UserName"
              placeholder="Enter UserName"
              value={this.state.UserName}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Type</b></label>
              <input type="text"
              className="form-control"
              name="Type"
              placeholder="Enter Type"
              value={this.state.Type}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Date</b></label>
              <input type="text"
              className="form-control"
              name="Date"
              placeholder="Enter Date"
              value={this.state.Date}
              onChange={this.handleInputChange}/>
            </div>


            <button className="btn btn-success" type="Submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-squar"></i>
              &nbsp; Submit
            </button>

          </form>
     </div>
     
    );
  }
}



  