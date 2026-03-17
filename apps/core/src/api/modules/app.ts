import api from '../index'

export default {
  // 登录
  login: (data: {
    account: string
    password: string
  }) => api.post('app/auth/login', data, {
    fake: true,
  }),

  // 获取权限
  permission: () => api.get('app/auth/permission', {
    fake: true,
  }),
}
