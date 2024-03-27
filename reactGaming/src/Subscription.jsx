import { useState } from "react"
import { ImageLogin } from "./ImageLogin"

export function Subscription() {
    
    const[name, setName] =useState('')
    const[surname, setSurname] =useState('')
    const[email, setEmail] =useState('')
    const[password, setPassword] =useState('')
    const[confirmPassword, setConfirmPassword ]=useState('')
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    
    function handleNameChange(event) {
        setName(event.target.value)
    }
    function handleLastNameChange(event) {
        setSurname(event.target.value)
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

    function handleRegister(){
        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, surname, email, password}),
        }).then(response => {
            if(response.ok) {
                return response.json();
            } throw new Error ('Registrazione fallita')
        }).then(data => {
            console.log(data.message);
            alert(data.message)
            setName('');
            setSurname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setRegistrationSuccess(true);
        }).catch(error => {
            console.error(error.message);
            alert('Registrazione Fallita')
        });
    }

    return(
        <div className="loginPage">
            <div className="stylePart1">
                <h1>Registrati:</h1>
                <form className="subscriptionForm"  onSubmit={handleSubmit}>
                    <input type="text" placeholder="Name:" value={name} onChange={handleNameChange}/>
                    <input type="text" placeholder="Surname:" value={surname} onChange={handleLastNameChange}/>
                    <input type="email" placeholder="Email:"value={email} onChange={handleEmailChange}/>
                    <input type="password" placeholder="Password:" value={password} onChange={handlePasswordChange}/>
                    <button className="formButton" onClick={handleRegister}>Register</button>
                </form>  
            </div>
            <div className="ImageBoxLogin">
                <ImageLogin/>
            </div>
        </div>
    )
}