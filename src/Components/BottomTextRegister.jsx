import React from "react";
import { Link } from "react-router-dom";

export default function BottomTextRegister() {
  return (
    <div className="bottom-text-register">
      <h5>
        Already have an account? <Link to="/">Sign In</Link>
      </h5>
    </div>
  );
}
