<script setup lang="ts">
function showModalInfo() {
  useFmModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
    onConfirm: () => {
      useFmToast().info('你点了确定')
    },
  })
}
function showModalSuccess() {
  useFmModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
    onConfirm: () => {
      useFmToast().info('你点了确定')
    },
  })
}
function showModalWarning() {
  useFmModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
    onConfirm: () => {
      useFmToast().info('你点了确定')
    },
  })
}
function showModalError() {
  useFmModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      useFmToast().info('你点了确定')
    },
  })
}
function showModalConfirm() {
  useFmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      useFmToast().info('你点了确定')
    },
  })
}
function showModalDoubleConfirm() {
  const { update } = useFmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    beforeClose: (action, done) => {
      if (action === 'confirm') {
        update({
          title: '二次确认',
          content: '确定要关闭吗？',
          confirmButtonText: '我确定',
          cancelButtonText: '我取消',
          beforeClose: (action) => {
            if (action === 'confirm') {
              done()
            }
            else {
              done()
            }
          },
        })
      }
      else {
        done()
      }
    },
  })
}
function showModalPromiseConfirm() {
  useFmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    confirmButtonText: '确认（随机成功或失败）',
    beforeClose: async (action, done) => {
      if (action === 'confirm') {
        await new Promise(resolve => setTimeout(resolve, 1000))
        if (Math.random() > 0.5) {
          useFmToast().success('成功了！')
          done()
        }
        else {
          useFmToast().error('失败了！')
        }
      }
      else {
        done()
      }
    },
  })
}
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <FmButton @click="showModalInfo">
      Info
    </FmButton>
    <FmButton @click="showModalSuccess">
      Success
    </FmButton>
    <FmButton @click="showModalWarning">
      Warning
    </FmButton>
    <FmButton @click="showModalError">
      Error
    </FmButton>
    <FmButton @click="showModalConfirm">
      Confirm
    </FmButton>
    <FmButton @click="showModalDoubleConfirm">
      Double Confirm
    </FmButton>
    <FmButton @click="showModalPromiseConfirm">
      Confirm with promise
    </FmButton>
  </div>
</template>
