import Router from 'vue-router'
import { Notification  } from 'element-ui';
const router = new Router()

export default function (data) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) { /* Ignore */
    }
  }

  // 401用户未登录，重定向到登录界面
  if (data.status === 401) {
    router.push('login')
    Notification({
      title: '友情提示',
      message: '请您先登陆哦',
      type: 'warning',
      duration: 2000,
      position:'top-right',
      offset: 30
    })
    return
  }

  return data
}
