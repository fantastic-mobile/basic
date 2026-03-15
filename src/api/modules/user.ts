import api from '../index'

export default {
  // 登录
  login: (data: {
    account: string
    password: string
  }) => api.post('user/login', data, {
    fake: true,
  }),

  // 获取权限
  permission: () => api.get('user/permission', {
    fake: true,
  }),
}
