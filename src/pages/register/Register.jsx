import { Link } from "react-router-dom";
import "./register.scss"

const Register = () => {
    return (
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Uni Verse.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora illo facilis aliquam repellendus quae incidunt exercitationem, necessitatibus assumenda voluptatum velit mollitia eos? Iusto quisquam numquam id sint soluta illo fugiat?</p>
                    <span>Do have an account?</span>
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder="Username"></input>
                        <input type="email" placeholder="Email"></input>
                        <input type="text" placeholder="Username"></input>
                        <input type="text" placeholder="Name"></input>
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;