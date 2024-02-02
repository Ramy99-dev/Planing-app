import '../styles/login.css';
import logo from '../assets/logo.png'

function Login(){
    return (
        <div className="login">
            <div className="login-container">
            <div className="logo">
                <img className='login-logo' src={logo} />
            </div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" />
                <div className="btn-container">
                    <input type="submit" value="Login" />
                </div>
                
            </div>
        </div>
    )
}

export default Login ;