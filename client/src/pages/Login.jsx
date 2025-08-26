import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setTimeout(() => {
      setLoading(false);
      setMessage("Demo: Signed in successfully ✔");
    }, 800);
  };

  return (
    <div className="form-card">
      <h2>Sign In</h2>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-row">
          <label className="label">Password</label>
          <input
            className="input"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-actions">
          <button className="btn" disabled={loading}>{loading ? "Signing in..." : "Sign In"}</button>
          <Link className="link" to="/signup">Create account</Link>
        </div>
        {message && <p style={{marginTop:12, color:"#70f0a8"}}>{message}</p>}
      </form>
    </div>
  );
}

export default Login;
