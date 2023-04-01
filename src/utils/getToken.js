function getTokenLocal(token = "token") {
  let isLocal = false;

  if (localStorage.getItem(token)) {
    const getToken = JSON.parse(localStorage.getItem(token));
    isLocal = true;
    return { isLocal, getToken };
  }
  return { isLocal };
}
export { getTokenLocal };
