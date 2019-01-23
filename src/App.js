import React from 'react';
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom';
import Home from './components/Home/Home';
import Display from './components/Display/Display';
import New from './components/New/New';
import Edit from './components/Edit/Edit';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';

const NotFoundRedirect = () => <Redirect to='/' />

class App extends React.Component {
  state = {
    employees: [],
    newEmployee: false
  }
  componentDidMount = () => {
    fetch('http://localhost:8080/api/employees')
      .then(response => response.json())
      .then(employees => this.setState({ employees }))
  }
  componentDidUpdate = (prevProps, prevState) => {
    if ((prevState.newEmployee !== this.state.newEmployee) && this.state.newEmployee){
    fetch('http://localhost:8080/api/employees')
      .then(response => response.json())
      .then(employees => this.setState({
          employees :employees,
          newEmployee : false
         }))
      .catch(err=>console.log("app",err));
    }
  }
  del = (id) =>{
    let fil = this.state.employees.filter(emp=>{
      return(Number(emp.id)!== Number(id));
    });
    this.setState({
      employees : fil
    })
  }
  newEmp = (bool)=>{
    this.setState({
      newEmployee : true
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
             <Route path = "/" exact component = {Home} />
             <Route path = "/new" render ={props=> <New emp = {this.newEmp}  {...props} /> }/>
             <Route path = "/display/:id/edit" render = {props=> <Edit emp = {this.newEmp} all= {this.state.employees}
                                                                       {...props} /> } />
             <Route path = "/display" render = {props => <Display fun = {this.del} all={this.state.employees}
                                                                    {...props}/> }/>
            <Route path = "/login" component = {Login} /> 
            <Route path = "/signup"  component = {Signup} />                                          
              <Route component={NotFoundRedirect} />
          </Switch> 
      </div>
      </Router>
    );
  }
}

export default App;


      
