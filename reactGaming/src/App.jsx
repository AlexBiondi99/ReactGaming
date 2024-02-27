
import { Route, Routes } from "react-router-dom";
import { PageGame } from "./PageGame";
import { HomePage } from "./homePage";

export function App() {
    return (
        <div>
            <Routes>
                <Route path="/"  element={<HomePage />}/>
                <Route path="/pageGame" element= {<PageGame />} />
            </Routes> 
        </div>
        
    )
}