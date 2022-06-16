import React, { useState } from "react";
import Sign_img from "./Sign_img";
import {NavLink} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
const Home = () =>{

    const history = useNavigate();
    const [inpval, setInpval] = useState({
        firstname:"",
        lastname:"",
        username:"",
        mobile:"",
        email:"",
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

        
       var phoneno = "^\\d{10}$";
       var uvalid = /^[A-Za-z]+$/;
       var pvalid = "(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*"

            
        
        e.preventDefault();
        const {firstname,lastname,username,mobile,email,password} = inpval;

        if( firstname ==="" || firstname.length>50){
            alert("firstname is not valid");
        }

        else if( !firstname.match(uvalid) ){
            alert("firstname is not valid");
        }
        else if(lastname === "" || lastname.length>50  ){
            alert("lastname is required");
        }
        else if( !lastname.match(uvalid) ){
            alert("lastname is not valid");
        }
        
        else if(!mobile.match(phoneno)){
            alert("Invalid Phone Number Please Enter 10 digit phone number")
        }
        else if(username === "" ){
            alert("username is required")
        }
        
        else if(!username.match(uvalid)){
            alert("Enter a valid username");
        }
        else if(username.length<5){
            alert("username too small");
        }
        else if(email === ""){
            alert("email is required");
        }
        else if(!email.includes("@")){
            alert("not valid email");
        }
        else if(password === ""){
            alert("password is required");
        }
        else if(password.length<8){
            alert("password is too short");
        }
        else if(!password.match(pvalid)){
            alert("password should contain atleast 8 characters, 1 digit and 1 special character and upper case, lowercase");
        }
        
        else{
            console.log("ss");
            
            localStorage.setItem("userKey",JSON.stringify([...data,inpval]));
            alert("successfully signed up")
            history('/login');
            
        }

    }
    return(
        <>
        <div className="container mt-3">
            <section className="d-flex justify-content-between">
                <div className="left_data p-3" style={{width:"100%"}}>
                    <h3 className="text-center col-lg-6">Sign UP!</h3>
                    <form>
  <div className="form-group mb-3  col-lg-6">
    
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter Your First Name"
      name = 'firstname'
      onChange={getdata}
      required="firsname is required"
    />
    
    
  </div>

  <div className="form-group mb-3  col-lg-6">
    
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter Your Last Name"
      name = 'lastname'
      onChange={getdata}
      required="firsname is required"
    />
    
    
  </div>

  <div className="form-group mb-3  col-lg-6">
    
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter Your UserName"
      name = 'username'
      onChange={getdata}
      required="firsname is required"
    />
    
    
  </div>
  <div className="form-group mb-3  col-lg-6">
    
    <input
      type="text"
      className="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      placeholder="Enter Your Mobile No "
      name = 'mobile'
      onChange={getdata}
      required="mobile is required"
    />
    
    
  </div>
  <div className="form-group mb-3 col-lg-6">
    
    <input
      type="email"
      className="form-control"
      id="exampleInputPassword1"
      placeholder="Enter Your Email"
      name = 'email'
      onChange={getdata}
      required="firsname is required"
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
      required="firsname is required"
    />
  </div>
 
  <button type="submit"  onClick = {addData} className="btn btn-success mt-3 col-lg-6">
    Sign Up
  </button><br></br>
  <button type="submit"  onClick = {()=>window.location.reload()} className="btn btn-primary mt-3 col-lg-6">
    Reset
  </button>
</form>
<p className="mt-3">Already have an account <span><NavLink to="/login">Sign In!</NavLink></span></p>

                </div>
                <Sign_img/>
            </section>
        </div>
        </>
    )
}

export default Home;