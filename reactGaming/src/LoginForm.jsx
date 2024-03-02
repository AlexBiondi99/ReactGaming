import { useState } from "react"

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
        <>
            <form onSubmit={handleButtonPress}>
                <input type="email" value={email} onChange={handleEmailValue}/>
                <input type="password" value={password} onChange={handlePasswordValue}/>
                <button>Accedi</button>
            </form>
        </>
    )
}