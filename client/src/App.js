import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const token = localStorage.getItem("token");

  useEffect(() => {
    document.body.className = dark ? "dark" : "";
  }, [dark]);

  const handleLoginSuccess = () => {
    window.location.reload();
  };

  const handleSignupSuccess = () => {
    setIsSignup(false);
  };

  return (
    <div>
      {token ? (
        <>
          <nav className="navbar">
            <div className="nav-brand">
              <h1>💰 Finance Tracker</h1>
            </div>
            <div className="nav-controls">
              <button className="theme-toggle" onClick={() => setDark(!dark)} title="Toggle theme">
                {dark ? "☀️ Light" : "🌙 Dark"}
              </button>
              <button
                className="logout-btn"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                Logout
              </button>
            </div>
          </nav>
          <Dashboard />
        </>
      ) : (
        <div className="auth-wrapper">
          {isSignup ? (
            <>
              <Signup onSignupSuccess={handleSignupSuccess} />
              <div className="auth-toggle-footer">
                <p>Already have an account? <button onClick={() => setIsSignup(false)}>Login</button></p>
              </div>
            </>
          ) : (
            <>
              <Login onLoginSuccess={handleLoginSuccess} />
              <div className="auth-toggle-footer">
                <p>Don't have an account? <button onClick={() => setIsSignup(true)}>Sign Up</button></p>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;