import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import BottomTextLogin from "./BottomTextLogin";

export default function CardsLogin() {
  // AOS
  useEffect(() => {
    AOS.init();
  }, []);

  // Handle Submit
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // <= merefresh page

    // Mengakses value pada input
    console.log("Email = ", email);
    console.log("Password = ", password);

    // menghapus semua value pada form input
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="container main-container">
        <div className="title" data-aos="zoom-in">
          <h1
            data-aos="fade-right"
            data-aos-delay="600"
            data-aos-duration="600">
            Login to your Account
          </h1>
          <form name="formInput" onSubmit={handleSubmit}>
            <div
              className="form-inputs"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="700">
              <label>Email Address :</label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="email@example.org"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                required
              />

              <label>Password :</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="input your password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
                required
              />
              <button
                className="submit-btn"
                type="submit"
                id="submit"
                name="submit"
                required>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container second-container">
        <BottomTextLogin />
      </div>
    </>
  );
}
