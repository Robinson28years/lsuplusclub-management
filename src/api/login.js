import fetch from '@/utils/fetch';

export function login(email, password) {
  return fetch({
    url: '/login',
    method: 'post',
    data: {
      email,
      password
    }
  });
}

export function getInfo() {
  return fetch({
    url: '/get_user_details',
    method: 'get',
    // params: { token }
  });
}

export function logout() {
  // return fetch({
  //   url: '/user/logout',
  //   method: 'post'
  // });
  return true
}



