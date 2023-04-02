import React, { useEffect, useState } from "react";
import { getTokenLocal } from "../../utils/getToken";
import postSign from "./postSign";
import { appContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

export default function Sign() {
  const { getToken } = getTokenLocal();
  const { setUsername, setPassword, fetchSign } = postSign();
  const { user } = appContext()
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
      console.log('ada token nya!')
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();
    fetchSign();
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
