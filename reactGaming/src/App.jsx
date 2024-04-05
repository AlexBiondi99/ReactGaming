import { Route, Routes } from "react-router-dom";

import { LoginForm } from "./LoginForm";
import { Subscription } from "./Subscription";
import { HomePage } from "./homePage";
import { Cart } from "./Cart";
import { CallFake } from "./CallFake";
import { Favorites } from "./Favorites";
import { ProfilePage } from "./ProfilePage";
import { ProfileDataMok } from "./ProfileDataMok";
import { PaymentPage } from "./PaymentPage"

export function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="pageGame" element={<CallFake />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<Subscription />} />
        <Route path="cart" element={<Cart />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="profile" element={<ProfileDataMok />} />
        <Route path="payment" element={<PaymentPage />} />
      </Routes>
    </div>
  );
}
