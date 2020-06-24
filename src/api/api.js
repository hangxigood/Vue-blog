import axios from 'axios'
import baseUrl from '.'

export function GetPostList () {
  return axios({
    url: baseUrl + '/api/v1/Post',
    method: 'get'
  })
}

export function GetPostDetail (params) {
  return axios({
    url: baseUrl + '/api/v1/Post/' + params,
    method: 'get'
  })
}
