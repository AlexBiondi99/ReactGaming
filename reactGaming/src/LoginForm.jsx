import { useState } from "react";
import { Link } from "react-router-dom";
import { ImageLogin } from "./ImageLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleEmailValue(event) {
    setEmail(event.target.value);
  }
  function handlePasswordValue(event) {
    setPassword(event.target.value);
  }

  async function handleButtonPress(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("email" , data.email);
        window.location.href = "/";
      } else {
        let errorMessage = "Errore nel Login";
        if (
          response.headers.get("content-type")?.includes("application/json")
        ) {
          const data = await response.json();
          errorMessage = data.message || errorMessage;
        }
        setError(errorMessage);
        throw new Error(error);
      }
    } catch (error) {
      setError("Errore durante il login");
      console.error(error);
      toast.error("Wrong password or email", {
        position: "top-center",
        pauseOnHover: false,
        closeOnClick: true,
        autoClose: 2000,
      });
    }
  }
  return (
    <>
      <Navbar />
      <div className="loginPage">
        <div className="stylePart1">
          <form className="loginForm" onSubmit={handleButtonPress}>
            <h1>Log In:</h1>
            <input
              placeholder="Email:"
              type="email"
              value={email}
              onChange={handleEmailValue}
            />
            <input
              placeholder="Password:"
              type="password"
              value={password}
              onChange={handlePasswordValue}
            />
            <button className="formButton">Accedi</button>
            <Link className="linkIscrizione" to="/signup">
              Non hai un account? iscriviti ora
            </Link>
          </form>
        </div>
        <div className="ImageBoxLogin">
          <ImageLogin />
        </div>
        <ToastContainer className={"ToastAlert"} theme="dark" />
      </div>
      <Footer />
    </>
  );
}
