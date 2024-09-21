import { defineFakeRoute } from 'vite-plugin-fake-server/client'

// 管理员
const allList: any[] = []
for (let i = 0; i < 50; i++) {
  allList.push(i + 1)
}

export default defineFakeRoute([
  {
    url: '/mock/page/loadmore',
    method: 'get',
    response: ({ query }) => {
      const { from, limit } = query
      const pageList = allList.filter((_item, index) => {
        return index >= ~~from && index < (~~from + ~~limit)
      })
      return {
        error: '',
        status: 1,
        data: {
          list: pageList,
          total: allList.length,
        },
      }
    },
  },
])
