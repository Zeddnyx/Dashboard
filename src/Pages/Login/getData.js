import { useContext } from "react";
import { authContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { getTokenLocal } from "../../utils/getToken";

export const getSign = async () => {
  const { signIn, setSignIn, user, setUser } = useContext(authContext);
  const navigate = useNavigate();
  const { getToken } = getTokenLocal();

  const data = await fetch("https://dummyjson.com/auth/login", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getToken}`,
    },
  });
  const json = await data.json();
  if (json.token) {
    setSignIn(true);
    setUser(json)
    navigate("/dashboard");
  }
};
