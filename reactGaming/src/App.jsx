
import { Route, Routes } from "react-router-dom";
import { PageGame } from "./PageGame";
import { HomePage } from "./homePage";
import { Navbar } from "./Navbar";
import { LoginForm } from "./LoginForm";
import { Subscription } from "./Subscription"
import { Footer } from "./Footer";
 


export function App() {
    return (
        <div className="page">
            <Navbar />
            <Routes>
                <Route path="/"  element={<HomePage />}/>
                <Route path="pageGame" element={<PageGame />} />
                <Route path="login" element={<LoginForm />} />
                <Route path="subscribe" element={<Subscription />} />
            </Routes> 
            <Footer />
        </div>
        
    )
}