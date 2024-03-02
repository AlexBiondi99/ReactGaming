import { useState } from "react"

export function Subscription() {
    
    const[name, setName] =useState('')
    const[lastName, setLastName] =useState('')
    const[email, setEmail] =useState('')
    const[password, setPassword] =useState('')
    const[confirmPassword, setConfirmPassword ]=useState('')
    

    function handleNameChange(event) {
        setName(event.target.value)
    }
    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }
    function handleEmailChange(event) {
        setEmail(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
        
    }
    function handleConfirmPasswordChange(event) {
        setConfirmPassword(event.target.value)
        
    }
    function handleSubmit(event) {
        event.preventDefault()
    }
    function buttonDisabled() {
        return!(
           name && lastName && email && password && confirmPassword && password === confirmPassword 
        )
        
    }
    return(
        <div className="loginPage">
            <form className="loginForm"  onSubmit={handleSubmit}>
                <input type="text" placeholder="Name:" value={name} onChange={handleNameChange}/>
                <input type="text" placeholder="Last Name:"value={lastName} onChange={handleLastNameChange}/>
                <input type="email" placeholder="Email:"value={email} onChange={handleEmailChange}/>
                <input type="password" placeholder="Password:" value={password} onChange={handlePasswordChange}/>
                <input type="password" placeholder="ConfirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange}/>
                
                <button className="formButton" disabled={buttonDisabled()}>Register</button>
            </form>  
        </div>
    )
}