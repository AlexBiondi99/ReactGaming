import { Route, Routes, useParams } from "react-router-dom";
import React from "react";
import { HomePage } from "./homePage";
import { LoginForm } from "./LoginForm";
import { Subscription } from "./Subscription";
import { Cart } from "./Cart";
import { PageGame } from "./PageGame"; 
import { Favorites } from "./Favorites";
import { ProfilePage } from "./ProfilePage";
import { ProfileDataMok } from "./ProfileDataMok";
;

export function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pageGame/:id" element={<PageGame />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<Subscription />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="profile" element={<ProfileDataMok />} />
      </Routes>
    </div>
  );
}


