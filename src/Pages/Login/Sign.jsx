import React, { useState } from "react";
import { getTokenLocal } from "../../utils/getToken";
import { useNavigate } from "react-router-dom";
import { postSign } from "./PostData";

export default function Sign() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { getToken } = getTokenLocal();

  // if user have already token then navigate to dashboard
  React.useEffect(() => {
    if (getToken) {
      navigate("/dashboard");
    }
  }, [getToken]);

  const submit = (e) => {
    e.preventDefault();
    postSign(username, password);
    //if sign success then nav to dashbord
    if (getToken) {
      navigate("/dashboard");
    }
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
