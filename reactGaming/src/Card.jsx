import { Link } from "react-router-dom";
import React from "react";

export function Card({ title, coverSrc, discount }) {
    return (
        <div className="boxCard">
            <Link to='/pageGame' className="linkContainer">
                <img className="imgCard" src={coverSrc} alt={title} /> 
                {discount && (
                    <div className="sconto">
                        <h2>{discount}</h2>    
                    </div>
                )}
            </Link>
            <h2>{title}</h2>
        </div>
    )}
