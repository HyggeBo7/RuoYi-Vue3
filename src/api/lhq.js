import request from '@/utils/request';
import useUserStore from '@/store/modules/user';

export function getListLazyCircleUser(data) {
  return request({
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    url: '/lhq/listLazyCircleUser',
    method: 'post',
    data: data
  })
}

export function getLazyCircleUserByKey(data) {
  return request({
    url: '/lhq/getLazyCircleUserByKey',
    method: 'get',
    params: data
  })
}

export function getLazyCircleUserByUserId(data) {
  return request({
    url: '/lhq/getLazyCircleUserByUserId',
    method: 'get',
    params: data
  })
}

//更新用户信息
export function updateLhqUser(data) {
  return request({
    url: '/lhq/updateLhqUser',
    method: 'get',
    params: data
  })
}

//获取关注信息列表
export function getListUserFollow(data) {
  return request({
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    url: '/lhq/listUserFollow',
    method: 'post',
    data: {...data, followId: useUserStore().userId}
  })
}

//获取关注信息
export function getUserFollow(toUserId) {
  return request({
    url: '/lhq/selectUserFollowByOnly',
    method: 'get',
    params: {followType: 1, followId: useUserStore().userId, toFollowId: toUserId}
  })
}

//新增关注信息
export function insertUserFollow(data) {
  return request({
    url: '/lhq/insertUserFollow',
    method: 'post',
    data: {...data, followId: useUserStore().userId}
  })
}

//获取随机推送用户信息
export function getListRandomUser(data) {
  return request({
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    url: '/lhq/listRandomUser',
    method: 'post',
    data: data
  })
}

//获取上墙用户信息
export function getListCoverUser(data) {
  return request({
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    url: '/lhq/listCoverUser',
    method: 'post',
    data: data
  })
}
