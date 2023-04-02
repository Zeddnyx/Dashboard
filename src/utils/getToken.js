function getTokenLocal(token = "token", user = 'user') {
  let isLocal = false;

  const tokenLocal = localStorage.getItem(token)
  const userLocal = localStorage.getItem(user)
  if (tokenLocal && userLocal) {
    const getToken = JSON.parse(tokenLocal);
    const getUser = JSON.parse(userLocal);
    isLocal = true;
    return { isLocal, getToken, getUser };
  }
  return { isLocal };
}
export { getTokenLocal };
