import Baldurgate3 from "./images/Baldurgate3.jpg";
import thewitcher from "./images/thewitcher.jpg";
import laracroft from "./images/lara-croft.jpg";
import GOW from "./images/god-of-war.jpg";
import { useEffect, useState } from "react";

export function ImageLogin(){
        const [image,setImage] = useState('');

        useEffect(() =>{
            const background = [laracroft,GOW,thewitcher,Baldurgate3];
            const randomIndex = Math.floor(Math.random() * background.length);
            const randomBackground = background[randomIndex];
            setImage(randomBackground);
        })
   return(
        <>
        <img src={image} className="ImageLogin" alt="Imagine"/>
        </>
   ) 
}