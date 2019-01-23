import React from 'react';
import './Edit.css';
import Nav from '../Navbar/Navbar';
import '../Edit/Edit.css';
import color from 'css-color-converter';

let defaultColor ="#000000";

class Edit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            employee: [],
            submitted : false
        }
        const Id = this.props.match.params.id;

        if(this.props.all.length){
            const employeeSelected = this.props.all.filter(employee=>{
                return (Number(employee.id)=== Number(Id));
            });
            if(employeeSelected.length){
                this.state.employee = employeeSelected[0];
                defaultColor = color(this.state.employee.color).toHexString()
            }
        }
        else{
            this.props.history.push('/display');
        }
    }
    handleChange = (e)=>{
        const newValue = e.target.value;
        const updatedEmployee = {...this.state.employee};
        updatedEmployee[e.target.id]= newValue;
        this.setState({employee:updatedEmployee})
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        let id = this.props.match.params.id;
        fetch('http://localhost:8080/api/employees/' + id ,{
            method : 'PUT', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
            body : JSON.stringify({
                    "name" : this.state.employee.name,
                    "code" : this.state.employee.code,
                    "profession" : this.state.employee.profession,
                    "color" : this.state.employee.color,
                    "city" : this.state.employee.city,
                    "branch" : this.state.employee.branch,
                    "assigned" : this.state.employee.assigned   
            })
        }).then(res=>{
            this.props.emp(true);
            this.props.history.push('/display');
        })
        .catch(err=>console.log("Error in Edit",err));
    }
    render() {
        return(
        <div>
             <Nav/>
             <h2 className="heading">Edit Employee</h2>
             <div className = "edit">                  
             <div key = {this.state.employee.id}>         
             <form onSubmit = {this.handleSubmit}>
                 <div className="col-md-12 form-group form-inline">
                 <label className="col-sm-4 col-md-3 col-form-label" htmlFor="name">Name</label>
                 <input type="text" className="col-sm-8 col-md-9 form-control" id="name" name = "name" required
                        placeholder="Enter the Employee Name" maxLength = "30" onChange = {this.handleChange}
                        defaultValue = {this.state.employee.name}/>
                    </div>
                    <div className="col-md-12 form-group form-inline">
                    <label className="col-sm-4 col-md-3 col-form-label" htmlFor="code">Code</label>
                    <input type="text" className="col-sm-8 col-md-9 form-control" id="code" name = "code" required
                        placeholder="Enter the 4 digit code" maxLength = "4" onChange = {this.handleChange}
                        defaultValue = {this.state.employee.code} />
                    </div>
                    <div className="col-md-12 form-group form-inline">
                    <label className="col-sm-4 col-md-3 col-form-label" htmlFor="profession">Profession</label>
                    <input type="text" className="col-sm-8 col-md-9 form-control" id="profession" 
                    name = "profession" required placeholder="Enter the profession" maxLength = "30"
                    defaultValue = {this.state.employee.profession} onChange = {this.handleChange}/>
                    </div>
                    <div className="col-md-12 form-group form-inline">
                    <label className="col-sm-4 col-md-3 col-form-label" htmlFor="color">Color</label>
                    <input type="color" id="color" name = "color" required placeholder="Choose color" 
                        defaultValue = {defaultColor} onChange = {this.handleChange}/>
                    </div>
                    <div className="col-md-12 form-group form-inline">
                    <label  className="col-sm-4 col-md-3 col-form-label" htmlFor="city">City</label>
                    <input type="text" className="col-sm-8 col-md-9 form-control" id="city" name = "city" required
                        placeholder="Enter the city" maxLength = "30" defaultValue = {this.state.employee.city} 
                        onChange = {this.handleChange}/>
                    </div>
                    <div className="col-md-12 form-group form-inline">
                    <label className="col-sm-4 col-md-3 col-form-label" htmlFor="branch">Branch</label>
                    <input type="text" className="col-sm-8 col-md-9 form-control" id="branch" name = "branch" required
                        placeholder="Enter the branch" maxLength = "20" defaultValue = {this.state.employee.branch}
                        onChange = {this.handleChange}/>
                    </div>
                    <div className="col-md-12 form-group form-inline">
                    <label className="col-sm-4 col-md-3 col-form-label" htmlFor="assigned">Assigned</label>
                    <select className="col-sm-8 col-md-9 form-control" id="assigned" name = "assigned" required
                      onChange={this.handleChange} defaultValue = {this.state.employee.assigned}>
                        <option value ="true">True</option>
                        <option value ="false">False</option>
                    </select>
                    </div>
                    <button type="submit" className="btn btn-info">Submit</button>
                    </form>
                    </div>
            </div>
        </div>)
    }
};


export default Edit;

    

  