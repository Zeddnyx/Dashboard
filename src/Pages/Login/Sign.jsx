import React, { useState } from "react";
import { getTokenLocal } from "../../utils/getToken";
import { Navigate } from "react-router-dom";

export default function Sign() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const postSign = async (user, pw) => {
    const data = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: user,
        password: pw,
        // expiresInMin: 60, // optional
      }),
    });
    const json = await data.json();

    if (data.status === 400) {
      console.log("user/password wrong");
    } else if (json.token) {
      localStorage.setItem("token", JSON.stringify(json.token));
      console.log('loggin succes')
    }
  };

  // if user have already token then navigate to dashboard
  const { getToken } = getTokenLocal();
  if (getToken) {
    return <Navigate to="/dashboard" replace={true} />;
  }

  const submit = (e) => {
    e.preventDefault();
    postSign(username, password);
    if (getToken) {
      return <Navigate to="/dashboard" replace={true} />;
    }
  };

  return (
    <section className='section max-w-[923px] mx-auto mt-20'>
      <form onSubmit={submit} className="grid gap-3">
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="password"
        />
        <button type="submit">Login</button>
      </form>
      <p>user: kminchelle</p>
      <p>pw: 0lelplR</p>
    </section>
  );
}
