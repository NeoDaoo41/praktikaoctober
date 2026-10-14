function Register(login, password) {
  if (!login || !password) {
    throw new Error('Логин и пароль обязательны');
  }

  localStorage.setItem(
    'userpass',
    JSON.stringify({ login, password })
  );

  return true;
}