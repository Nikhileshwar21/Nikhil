import React, { useState } from "react";
import Sign_img from "./Sign_img";
import {useNavigate} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Login = () =>{

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        
        username:"",
        
        password:""

    })

    const [data, setData] = useState([])
    
    //console.log(inpval);
    const getdata = (e) =>{
       // console.log(e.target.value);
       const {value,name} = e.target;
       //console.log(value,name);
       setInpval(()=>{
        return{
            ...inpval,
            [name]:value
        }
       })

    }
    const addData = (e) =>{
        e.preventDefault();
        const {username,password} = inpval;
        const getUserArr = localStorage.getItem("userKey");
        console.log(getUserArr);

        
         if(username === ""){
            alert("username is required");
        }
        
        else if(password === ""){
            alert("password is required");
        }
        
        else{
            if(getUserArr && getUserArr.length){
                const userdata = JSON.parse(getUserArr);
                const userLogin = userdata.filter((el,k)=>{
                    return el.username === username && el.password === password
                });

                if(userLogin.length === 0 ){
                    alert("invalid details")
                }
                else{
                   localStorage.setItem("user_login",JSON.stringify(userLogin))
                   history("/details");
                }
            }
        }
    }
    return(
        <>
        <div className="container mt-3">
            <section className="d-flex justify-content-between">
                <div className="left_data p-3" style={{width:"100%"}}>
                    <h3 className="text-center col-lg-6">LOGIN!</h3>
                    <form>
  

  

  <div className="form-group mb-3  col-lg-6">
    
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter Your UserName"
      name = 'username'
      onChange={getdata}
    />
    
    
  </div>
  
  
  <div className="form-group mb-3 col-lg-6">
   
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Password"
      name = 'password'
      onChange={getdata}
    />
  </div>
 
  <button type="submit"  onClick = {addData} className="btn btn-success mt-3 col-lg-6">
    Login
  </button>
</form>
<p className="mt-3">Create Account <span><NavLink to="/">Sign Up!</NavLink></span></p>

                </div>
                <Sign_img/>
            </section>
        </div>
        </>
    )

}

export default Login;