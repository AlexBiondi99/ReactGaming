import { Link } from "react-router-dom";
export function Card() {
    return(
            
                <div className="boxCard">
                    <Link to='/pageGame'>
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" alt="Gta5" /> 
                    <div className="sconto"></div>   
                    </Link>
                    <h2>Grand Theft Auto V</h2>
                </div>
         
    )
}