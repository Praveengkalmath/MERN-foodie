import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
const Login = () => {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let navigate = useNavigate()

    let handleSubmit = (e) => {
        e.preventDefault()
        let data = { email, password }
        axios.post('http://localhost:4000/login', data)
            .then((res) => {
                if (res.data.message == 'login successfully') {
                    navigate('/home')
                }
                else {
                    alert(res.data.message)
                }
            })
    }

    return (
        <div className="login container">
            <div className="card mt-5 p-5">
                <h1>Login Page</h1>
                <div className="form w-25">
                    <form action="" onSubmit={handleSubmit}>
                        <div className="email my-4">
                            <input type="email" className="form-control" placeholder="email address" name="email"
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="password my-4">
                            <input type="password" className="form-control" placeholder="password" name="password"
                                value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="login_button">
                            <button className="btn btn-dark">Login</button>
                        </div>
                        <div className="signUp_button">
                            <p>Are you new user?</p>
                            <Link to="/singUp" className="btn btn-outline-dark">SignUp</Link>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Login;
