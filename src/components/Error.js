import React from "react";
import {useNavigate} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
const Error = () => {
    const history = useNavigate();
    return (
        <>
        <h1>
            Page Not Found!</h1>
            <button className="btn btn-dark" onClick={()=>history('/')}> Go back to Login Page</button>
        </>
    )
}

export default Error;