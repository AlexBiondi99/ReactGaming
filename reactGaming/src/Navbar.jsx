import { Link } from "react-router-dom";

export function Navbar() {
    return(
        <div className="navbar">
            <button className="loginButton">
                <Link  className="linkLogin" to='/login'>Login</Link>
            </button>
        </div>
    )
}