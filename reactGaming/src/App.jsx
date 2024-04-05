import { Route, Routes, useParams } from "react-router-dom";
import { HomePage } from "./homePage";
import { CallFake } from "./CallFake";
import { LoginForm } from "./LoginForm";
import { Subscription } from "./Subscription";
import { Cart } from "./Cart";
import { PageGame } from "./PageGame"; 
import { Favorites } from "./Favorites";
import { ProfilePage } from "./ProfilePage";
import { ProfileDataMok } from "./ProfileDataMok";


export function App() {
    return (
        <div className="page">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pageGame/:id" element={<PageGameWrapper />} /> {/* Utilizza un wrapper per PageGame per passare i parametri */}
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<Subscription />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/api/games" element={<APIDataComponent />}/> {/* Aggiungi la nuova route per gestire le richieste API */}
                <Route path="favorites" element={<Favorites />} />
                <Route path="profile" element={<ProfileDataMok />} />
            </Routes>
        </div>
    );
}


function PageGameWrapper() {
    let { id } = useParams(); 
    return <PageGame gameId={id} />; 
}


function APIDataComponent() {}