const TOKEN_KEY = "access_token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(value) {
  localStorage.setItem(TOKEN_KEY, value);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}
