import request from './request'

export function signIn (user) {
  return request({
    url: '/user/login',
    method: 'post',
    data: user
  })
}
