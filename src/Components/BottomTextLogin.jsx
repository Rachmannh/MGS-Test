import React from "react";
import { Link } from "react-router-dom";

export default function BottomText() {
  return (
    <>
      <div className="bottom-text">
        <h5>
          Don't have an account? <Link to="/register">Register</Link>
        </h5>
        <h5>
          Forgot Password? <Link to="/">Recover Password</Link>
        </h5>
      </div>
    </>
  );
}
