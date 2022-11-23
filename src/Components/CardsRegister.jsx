import React, { useState } from "react";
import BottomTextRegister from "./BottomTextRegister";

export default function CardsRegister() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // <= merefresh page

    // Mengakses value pada input
    console.log("Firstname = ", firstName);
    console.log("Lastname =", lastName);
    console.log("Email = ", email);
    console.log("Password = ", password);

    // menghapus semua value pada form input
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="container main-container">
        <div className="title">
          <h1>Create Your Account</h1>
          <form name="formInput" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <label>Firstname :</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Andi"
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
                required
              />

              <label>Lastname :</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Noya"
                onChange={(event) => setLastName(event.target.value)}
                value={lastName}
                required
              />
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
                Register
              </button>
            </div>
          </form>
          <div className="terms">
            <input type="checkbox" id="check" name="check" value="check" />
            <label>
              To register with us please tick to agree to our <br />{" "}
              <a href="/register">Terms & Conditions.</a>
            </label>
          </div>
        </div>
      </div>
      <div className="container second-container__register">
        <BottomTextRegister />
      </div>
    </>
  );
}
