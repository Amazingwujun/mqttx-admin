import request from './request'

export function signIn (user) {
  return request({
    url: '/user/signIn',
    method: 'post',
    data: user
  })
}

export function signUp (user) {
  return request({
    url: '/user/signUp',
    method: 'post',
    data: user
  })
}
