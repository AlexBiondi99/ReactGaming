
import { Link, Route, Routes } from "react-router-dom";
import { PageGame } from "./PageGame";
import { HomePage } from "./HomePage";
import { LoginForm } from "./LoginForm";
import { Subscription } from "./Subscription";


export function App() {
    return (
        <div className="page">
            <Link to= '/login' >login</Link> || <Link to='/subscription'>Subscription</Link>
            <Routes>
                <Route path="/"  element={<HomePage />}/>
                <Route path="pageGame" element= {<PageGame />} />
                <Route path="login" element={<LoginForm />}/>
                <Route path="subscription" element={<Subscription />}/>
            </Routes> 
        </div>
        
    )
}