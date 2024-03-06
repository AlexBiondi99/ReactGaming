
import { Route, Routes } from "react-router-dom";
import { PageGame } from "./PageGame";
import { HomePage } from "./HomePage";
import { Navbar } from "./Navbar";
import { LoginForm } from "./LoginForm";



export function App() {
    return (
        <div className="page">
            <Navbar />
            <Routes>
                <Route path="/"  element={<HomePage />}/>
                <Route path="pageGame" element={<PageGame />} />
                <Route path="login" element={<LoginForm />} />
            </Routes> 
        </div>
        
    )
}