import React from 'react';
import './Home.css';
import NavHome from './NavHome/Navhome';


const Home = (props)=> {
    return(<div>  
            <div className = "img">
            <NavHome/>
            <div className = "butcenter">
            <button className = "btn btn-warning" onClick = {()=>{props.history.push('/display')}}>Employee Details</button>
            </div>
            </div>
            </div>)
}

export default Home;

  