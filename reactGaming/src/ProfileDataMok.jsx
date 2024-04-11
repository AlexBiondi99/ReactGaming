import React from "react";
import { useEffect, useState } from "react";
import { ProfilePage } from "./ProfilePage";
import { LoginForm } from "./LoginForm";

export function ProfileDataMok() {
    const [dataUser, setDataUser] = useState({});
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    let personalData = null;
    useEffect(() => {
        async function fetchData() {
            try {
                const dataEmail = encodeURIComponent(localStorage.getItem("email"));
                const response = await fetch(`http://localhost:3000/api/profile?email=${dataEmail}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setDataUser(data[0]);
                    console.log(data)
                } else {
                    throw new Error('Errore nel recupero dati');
                }
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);
    if(isLoggedIn){
            personalData = {
            name: dataUser.name,
            lastname: dataUser.surname,
            email: dataUser.email,
            img: 'https://cdn.icon-icons.com/icons2/2522/PNG/512/profile_basic_head_icon_151671.png'
        };
    }

    return (
        <>
            { isLoggedIn ? (
                <ProfilePage personalData={personalData}/>
                
            ) : (<LoginForm/>) }
        </>
    );
}