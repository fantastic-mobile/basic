if (!import.meta.env.DEV) {
  const _hmt = []
  _hmt.push(['_requirePlugin', 'UrlChangeTracker', {
    shouldTrackUrlChange(newPath: any, oldPath: any) {
      return newPath && oldPath
    },
  }]);
  (function () {
    const hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?d7f6dd1733b48011a6bf797914549256'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode?.insertBefore(hm, s)
  })()
}

export {}
