import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return localStorage.getItem('token');
}

export function setToken(token) {
  console.log(token);
  return localStorage.setItem('token', token);
}

export function removeToken() {
  return localStorage.clear();
}
