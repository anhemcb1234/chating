import {useState, useEffect} from 'react'
import {userServices} from './services/userServices'
import {
    useNavigate,
  } from "react-router-dom";
function Login() {
    const[name,setName]=useState('');
    const[pass,setPass]=useState('');
    let navigate = useNavigate();

    const handlerName = (e) => {
        setName(e.target.value);
    }
    const handlerPass = (e) => {
        setPass(e.target.value);
    }
    const validateEmail = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(name)) {
            return (true)
        }
        alert("Email không đúng định dạng")
        setName('')
        return;
    }
    const validatePass = () => {
        const passSplit = pass.split('')
        if (pass.length < 5) {
            alert("Mật khẩu không được nhỏ hơn 5 ký tự");
            setPass('')
            return
        } 
        if(passSplit.some(item => item === ' ')){
            alert("Mật khẩu không được chứa khoảng trắng")
            setPass('')
            return
        }
    }
    const validate = () => {
        validateEmail()
        validatePass();
    }
    async function handlerLogin() {
        if(validate()) {
            return
        }
        try {
            const login = await userServices.postLogin({
                email: name,
                password: pass
            })
            localStorage.setItem('token', login.data.token);
            alert("Đăng nhập thành công")
            navigate("/userDetail");

        } catch(e) {
            alert(e)
        }
    }
    useEffect(() => {
        if(localStorage.getItem('token')) {
            navigate("/userDetail");
        }
    }, [])
    return (
        <div>
            <label>Email</label>
            <input placeholder="User" onChange={e => handlerName(e)}/>
            <label>Password</label>
            <input placeholder="Password" onChange={e => handlerPass(e)}/>
            <button onClick={handlerLogin}>Login</button>
        </div>
    )
}
export default Login