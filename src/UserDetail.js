import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode";
import {
    useNavigate,
  } from "react-router-dom";
function UserDetail() {
    const[data,setData]=useState([]);
    let navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        const decoded = jwt_decode(token);
        setData(decoded)
        console.log(decoded)
    },[])
    const handlerLogOut = () => {
        localStorage.removeItem('token');
        navigate("/login");
    }
    return (
        <div>
            <p>FullName: {data.full_name}</p>
            <p>Email: {data.email}</p>
            <button onClick={handlerLogOut}>Log out</button>
        </div>
    )
}
export default UserDetail