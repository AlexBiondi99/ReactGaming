import { Link } from "react-router-dom";
export function Card() {
    return(
            
                <div className="boxCard">
                    <Link to='/pageGame' className="linkContainer">
                    <img className="imgCard" src="https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png" alt="Gta5" /> 
                    <div className="sconto">
                        <h2>-20%</h2>    
                    </div>   
                    </Link>
                    <h2>Grand Theft Auto V</h2>
                </div>
         
    )
}