import { useContext } from "react";
import { appContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function postSign() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, setSignIn, user, setUser } = appContext();
  const navigate = useNavigate();

  const fetchSign = async () => {
    const data = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        // expiresInMin: 60, // optional
      }),
    });
    const json = await data.json();

    if (data.status === 400) {
      alert("user/password wrong");
    } else if (json.token) {
      localStorage.setItem("token", JSON.stringify(json.token));
      setSignIn(true);
      setUser(json); // if succes login the data will store to context props
      navigate("/dashboard");
    } else {
      return;
    }
  };
  return { username, setUsername, password, setPassword, fetchSign };
}
