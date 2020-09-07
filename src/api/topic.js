import request from './request'

export function getAllTopics (page) {
  return request({
    url: '/topics',
    method: 'GET',
    params: page
  })
}

export function deleteTopic (id) {
  return request({
    url: `/topic/${id}`,
    method: 'DELETE'
  })
}

export function createTopic (topic) {
  return request({
    url: '/topic',
    method: 'POST',
    data: topic
  })
}

export function updateTopic (topic) {
  const {id, remark} = topic
  return request({
    url: `/topic/${id}`,
    method: 'PUT',
    params: remark
  })
}
