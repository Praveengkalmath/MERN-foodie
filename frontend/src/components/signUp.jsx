import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [name, setName] = useState("")
    let [mobile, setMobile] = useState("")
    let [confirm, setConfirm] = useState("") 

    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let data = { name, email, password, confirm, mobile }
        if (name && email && (password === confirm)) {
            axios.post('http://localhost:4000/signup', data)
                .then((res) => {
                    alert(res.data.message)
                    navigate('/')
                })
        } else {
            alert("invalid credentials")
        }
    }

    return (
        <div className="signUp p-5 card mt-5 m-5 border border-4 border-dark ">
            <h1>SignUp Page</h1>
            <div className="signUp_form w-25 ">
                <form action="" onSubmit={handleSubmit}>
                    <div className="Name p-2">
                        <input type="text" placeholder="Enter Name" className="form-control"
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mobile_number p-2">
                        <input type="tel" max={10} min="10" placeholder="Enter Phone Number" className="form-control"
                            value={mobile} onChange={(e) => setMobile(e.target.value)} 
                           minLength='10' maxLength='10' />
                    </div>
                    <div className="email p-2">
                        <input type="email" placeholder="Enter email" className="form-control"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="password p-2">
                        <input type="password" placeholder="Enter Password" className="form-control"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="confirm_password p-2">
                        <input type="password" placeholder="Enter ConfirmPassword" className="form-control"
                            value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                    </div>
                    <div className="signUp_button">
                        <button className="btn btn-dark ">SignUp</button></div>
                    <div className="login_button">
                        <Link to="/" className="btn btn-outline-dark">Login</Link>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default SignUp;