import { useState } from "react"
import { Link } from "react-router-dom"

export function LoginForm() {
    const[email, setEmail] = useState('')
    const[password, setPassword]= useState('')

    function handleEmailValue(event) {
        setEmail(event.target.value)
    }
    function handlePasswordValue(event) {
        setPassword(event.target.value)
    }
    function handleButtonPress(event) {
        event.preventDefault()
    }
    return(
        <div className="loginPage">
            <h1>Log In:</h1>
            <form className="loginForm" onSubmit={handleButtonPress}>
                <input placeholder="Email:" type="email" value={email} onChange={handleEmailValue}/>
                <input placeholder="Password:" type="password" value={password} onChange={handlePasswordValue}/>
                <button className="formButton">Accedi</button>
                <Link className="linkIscrizione" to='/subscribe'>Non hai un account? inscriviti ora</Link>
            </form>
            
        </div>
    )
}