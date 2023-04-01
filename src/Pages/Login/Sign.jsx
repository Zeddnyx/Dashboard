import React, { useState, useContext } from "react";
import { getTokenLocal } from "../../utils/getToken";
import { postSign } from "./PostData";
import { authContext } from "../../context/context";

export default function Sign() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { getToken } = getTokenLocal();
  const { signIn, setSignIn } = useContext(authContext);

  const submit = (e) => {
    e.preventDefault();
    postSign(username, password);
  };

  return (
    <section className="section max-w-[923px] mx-auto mt-20 grid gap-5">
      <form onSubmit={submit} className="grid gap-3">
        <input
          className="outline-none p-2"
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          placeholder="username"
        />
        <input
          className="outline-none p-2"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="password"
        />
        <button className="bg-bgNav p-2" type="submit">
          Login
        </button>
      </form>
      <p>user: kminchelle</p>
      <p>pw: 0lelplR</p>
    </section>
  );
}
