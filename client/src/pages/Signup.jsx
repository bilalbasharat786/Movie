import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
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
      setMessage("Demo: Account created ✔ (no backend connected)");
    }, 800);
  };

  return (
    <div className="form-card">
      <h2>Create Account</h2>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <label className="label">Full name</label>
          <input
            className="input"
            type="text"
            placeholder="Bilal Basharat"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-actions">
          <button className="btn" disabled={loading}>{loading ? "Creating..." : "Create account"}</button>
          <Link className="link" to="/login">Already have an account?</Link>
        </div>
        {message && <p style={{marginTop:12, color:"#70f0a8"}}>{message}</p>}
      </form>
    </div>
  );
}

export default Signup;
