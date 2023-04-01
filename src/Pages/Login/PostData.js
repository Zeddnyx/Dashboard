export const postSign = async (user, pw) => {
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
  }
};
