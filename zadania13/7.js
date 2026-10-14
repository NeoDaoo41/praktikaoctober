function authorization(login, password) {
  const userpass = JSON.parse(localStorage.getItem('userpass'));
  if (!userpass) {
    throw new Error('User not found');
  }
  if (userpass.login !== login || userpass.password !== password) {
    throw new Error('Invalid login or password');
  }
  const uuid = crypto.randomUUID();
  document.cookie = `uuid=${uuid}; path=/; SameSite=Strict`;
  return { token: uuid };
}