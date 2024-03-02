
import { Link, Route, Routes } from "react-router-dom";
import { PageGame } from "./PageGame";
import { HomePage } from "./HomePage";


export function App() {
    return (
        <div>
            <Link to= '/try' >Try</Link>
            <Routes>
                <Route path="/"  element={<HomePage />}/>
                <Route path="/pageGame" element= {<PageGame />} />
            </Routes> 
        </div>
        
    )
}