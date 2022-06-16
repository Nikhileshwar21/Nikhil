import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const Details = () =>{

    const history = useNavigate();

    const [logindata, setLoginData]  = useState([]);
    console.log(logindata);
    const Hello = () =>{
        const getUser = localStorage.getItem("user_login");
        if(getUser && getUser.length){
            const user = JSON.parse(getUser);
            //console.log(user);
            setLoginData(user);

            const useruname = logindata.map((el,k)=>{
                return el.firstname === el.firstname
            });

            if(useruname){
                setTimeout(()=>{
                    console.log("ok")
                },3000)
            }
        }
    }

    const userLogout = () =>{
        localStorage.removeItem("user_login")
        history('/')
    }
    useEffect(()=>{
        Hello();
    },[])
    return(
        <>{
        logindata.length===0 ?"error login first" :
        <>
        <h1 className="text-center">Hello</h1>
        <h2  className="text-center">{logindata[0].firstname} !</h2>
        <div className="text-center">
        <button className="btn btn-dark center" onClick={userLogout}>Logout</button>
        </div>
        
        
        
        </>}
        </>
    )
}

export default Details;