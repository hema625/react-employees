import React,{Component} from 'react';
import './New.css';
import Nav from '../Navbar/Navbar';

class New extends Component {
    state = {
            name : null,
            code : null,
            profession : null,
            color : '#8080ff',
            city : null,
            branch : null,
            assigned : null,
            submitted : false
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        fetch('http://localhost:8080/api/employees',{
            method : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                    "name" : this.state.name,
                    "code" : this.state.code,
                    "profession" : this.state.profession,
                    "color" : this.state.color,
                    "city" : this.state.city,
                    "branch" : this.state.branch,
                    "assigned" : this.state.assigned
              })
            })
        .then(res=>{
                this.props.emp(true);
                this.props.history.push('/display');
            })
         .catch(err=>console.log("Error when submitting",err));
    }
  render(){
    return(
       <div>
        <Nav/>
        <h2 className="heading">Create an Employee</h2>
        <div className = "newemployee">         
         <form onSubmit = {this.handleSubmit}>
            <div className="col-md-12 form-group form-inline">
            <label className="col-sm-4 col-md-3 col-form-label" htmlFor="name">Name</label>
            <input type="text" className="col-sm-8 col-md-9 form-control" id="name" name = "name" required
                   placeholder="Enter the Employee Name" maxLength = "30" onChange={this.handleChange}/>
            </div>
            <div className="col-md-12 form-group form-inline">
            <label className="col-sm-4 col-md-3 col-form-label" htmlFor="code">Code</label>
            <input type="text" className="col-sm-8 col-md-9 form-control" id="code" name = "code" required
                   placeholder="Enter the 4 digit code" maxLength = "4" onChange={this.handleChange}/>
            </div>
            <div className="col-md-12 form-group form-inline">
            <label className="col-sm-4 col-md-3 col-form-label" htmlFor="profession">Profession</label>
            <input type="text" className= "col-sm-8 col-md-9 form-control" id="profession" 
              name = "profession" required placeholder="Enter the profession" maxLength = "30" onChange={this.handleChange}/>
            </div>
            <div className="col-md-12 form-group form-inline">
            <label className="col-sm-4 col-md-3 col-form-label" htmlFor="color">Color</label>
            <input type="color" id="color" name = "color" required
                   defaultValue="#8080ff" placeholder="Choose color" onChange={this.handleChange}/>
            </div>
            <div className="col-md-12 form-group form-inline">
            <label className="col-sm-4 col-md-3 col-form-label" htmlFor="city">City</label>
            <input type="text" className="col-sm-8 col-md-9  form-control" id="city" name = "city" required
                   placeholder="Enter the city" maxLength = "30" onChange={this.handleChange}/>
            </div>
            <div className="col-md-12 form-group form-inline">
            <label className="col-sm-4 col-md-3 col-form-label"  htmlFor="branch">Branch</label>
            <input type="text" className="col-sm-8 col-md-9 form-control" id="branch" name = "branch" required
                   placeholder="Enter the branch" maxLength = "20" onChange={this.handleChange}/>
            </div>
            <div className="col-md-12 form-group form-inline">
            <label className="col-sm-4 col-md-3 col-form-label" htmlFor="assigned">Assigned</label>
            <select className="col-sm-8 col-md-9 form-control" id="assigned" name = "assigned" required
                  defaultValue = "" onChange={this.handleChange}>
                <option value="" disabled hidden> -- select an option -- </option>
                <option value ="true" >True</option>
                <option value ="false">False</option>
            </select>
            </div>
            <button type="submit" className="btn btn-info">Submit</button>
         </form>
         </div>
        </div>
        )
    }
};

export default New;
