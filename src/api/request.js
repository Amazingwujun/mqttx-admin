import axios from 'axios'
import store from '@/store'
import {Message} from 'element-ui'

const service = axios.create({
  baseURL: 'http://localhost',
  timeout: 3000
})

service.interceptors.request.use(
  config => {
    if (store.getters.isLogin) {
      config.headers['Authorization'] = store.state.user.token
    }

    return config
  }, error => {
    return Promise.reject(error)
  })

service.interceptors.response.use(
  response => {
    let payload = response.data
    const {code, data, msg} = payload

    if (code !== 200) {
      Message({
        message: msg,
        type: 'error',
        duration: 2000
      })

      return Promise.reject(new Error())
    } else {
      return data
    }
  },
  error => {
    console.log(error.message)

    let msg
    if (error.message.indexOf('timeout') > -1) {
      // 请求超时
      msg = '请求超时'
    } else {
      msg = '接口请求异常'
    }

    Message({
      message: msg,
      type: 'error',
      duration: 2000
    })

    return Promise.reject(error)
  })

export default service
