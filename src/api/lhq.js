import request from '@/utils/request'

export function getListLazyCircleUser(data) {
  return request({
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    url: '/lhq/listLazyCircleUser',
    method: 'post',
    data: data
  })
}