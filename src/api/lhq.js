import request from '@/utils/request';
import useUserStore from '@/store/modules/user';

export function getListLazyCircleUser(data) {
  return request({
    //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
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
    //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
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
//type: 1：获取随机推送用户，2：获取随机用户,支持解锁(无解锁用户会提示异常)
//city：重庆、成都、深圳
export function getListRecommendedUser(data, type = '1') {
  return request({
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    url: '/lhq/listRecommendedUser',
    method: 'post',
    data: {...data, type: type}
  })
}

//助力推荐用户列表(userId给shareId助力)
export function addRecommended(shareId, userId = null) {
  return request({
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    url: '/lhq/addRecommended',
    method: 'post',
    data: {shareId: shareId, userId: userId}
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
