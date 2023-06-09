import React, { useEffect, useState } from "react";
import { getTokenLocal } from "../../utils/getToken";
import postSign from "./postSign";
import { appContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

export default function Sign() {
  const { getToken, getUser } = getTokenLocal();
  const { setUsername, setPassword, fetchSign } = postSign();
  const { user } = appContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (getToken && getUser) {
      navigate("/dashboard");
    } else {
      return;
    }
  }, []);

  const submit = (e) => {
    e.preventDefault();
    fetchSign();
  };

  return (
    <section className="grid gap-5">
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
        <button className="bg-bgNav p-2 text-text" type="submit">
          Login
        </button>
      </form>
      <div className='text-bgNav'>
        <p>user: kminchelle</p>
        <p>pw: 0lelplR</p>
      </div>
    </section>
  );
}
