import React, { Component } from "react";
import axios from "axios";

export default class EditPost extends Component{

  constructor(props){
    super(props);
    this.state={
      IDNum:"",
      Name:"",
      course:"",
      CourseFee:"",
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
   const id = this.props.match?.params.id;
   
   const {IDNum,Name,course,CourseFee,Date}=this.state;

   const data={
     IDNum:IDNum,
     Name:Name,
     course:course,
     CourseFee:CourseFee,
     Date:Date,
   }

   console.log(data)

   axios.put('/post/update/${id}',data).then((res)=>{
     if(res.data.success){
       alert("Post Upadated Successfully")
       this.setState({
        IDNum:"",
        Name:"",
        course:"",
        CourseFee:"",
        Date:""
       }
       )
   }
  
  })
}



  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get('/post/${id}').then((res)=>{
      if(res.data.success){
        this.setState({
          IDNum:res.data.post.IDNum,
          Name:res.data.post.Name,
          course:res.data.post.course,
          CourseFee:res.data.post.CourseFee,
          Date:res.data.post.Date,
          
        });

        console.log(this.state.post);
      }

    });
  }
  render(){
    return(
     <div className="col-md-8 mt-4 mx-auto">
        <h1 className="h3 mb-3 font-weight-normal"style={{color:'blue'}}><b><center>Edit Student Fees</center></b></h1>
        
          <form className="needs-validation" noValidate>
             
          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>ID Number</b></label>
              <input type="text"
              className="form-control"
              name="IDNum"
              placeholder="Enter ID Number"
              value={this.state.IDNum}
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
              <label style={{marginBottom:'5px'}}><b>Course</b></label>
              <input type="text"
              className="form-control"
              name="course"
              placeholder="Enter Course"
              value={this.state.course}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>CourseFees</b></label>
              <input type="text"
              className="form-control"
              name="Course Fees"
              placeholder="Enter Course Fees"
              value={this.state.CourseFees}
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


            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-squar"></i>
              &nbsp; Edit
            </button>

          </form>
     </div>
     
    );
  }
}
