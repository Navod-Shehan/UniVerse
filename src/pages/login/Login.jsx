import { Link } from "react-router-dom";
import "./login.scss"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Login = () => {

    const{login} = useContext(AuthContext);

    const handleLogin = () => {
        login();
    }

    return (
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hello World.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illo facilis aliquam repellendus quae incidunt exercitationem, necessitatibus assumenda voluptatum velit mollitia eos? Iusto quisquam numquam id sint soluta illo fugiat?</p>
                    <span>Don't have an account?</span>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username"></input>
                        <input type="password" placeholder="Password"></input>
                        <button onClick={handleLogin} >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;