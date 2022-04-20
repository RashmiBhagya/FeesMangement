import React, { Component} from "react";
import axios from "axios";

export default class PostDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      post:{}
    };
  }

  componentDidMount(){
    const id = this.props.match?.params.id;

    axios.get('/post/${id}').then((res)=>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });

        console.log(this.state.post);
      }

    });
  }

  
  render() {

    const{IDNum,Name,course,CourseFee,Date}=this.state.post;

    return (
      <div style={{margin:'20px'}}>
      <h4>{IDNum}</h4>
      <hr/>

      <dl className="row">
       <dt className="col-sm-3">Name</dt>
       <dd className="col-sm-9">{Name}</dd>

       <dt className="col-sm-3">course</dt>
       <dd className="col-sm-9">{course}</dd>
       
       <dt className="col-sm-3">Course Fee</dt>
       <dd className="col-sm-9">{CourseFee}</dd>

       <dt className="col-sm-3">Date</dt>
       <dd className="col-sm-9">{Date}</dd>
        
     </dl>
      </div>
     
    )
  }
}
