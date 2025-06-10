<script setup lang="ts">
import { toast } from 'vue-sonner'
import { useFmModal } from '@/ui/components/FmModal'

definePage({
  meta: {
    title: '弹窗',
  },
})

const modal = ref(false)
const modalInfo = ref({
  closable: true,
  center: false,
  header: true,
  footer: true,
  contentHeight: '',
  loading: false,
})
watch(() => modalInfo.value.loading, (loading) => {
  if (loading) {
    setTimeout(() => {
      modalInfo.value.loading = false
    }, 3000)
  }
})

function handleBeforeClose(action: 'confirm' | 'cancel' | 'close', done: () => void) {
  if (action === 'close') {
    useFmModal().confirm({
      title: '提示',
      content: '确定要关闭吗？',
      onConfirm: () => {
        done()
      },
    })
  }
  else {
    done()
  }
}

function showModalInfo() {
  useFmModal().info({
    title: '温馨提醒',
    content: '这是 info 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalSuccess() {
  useFmModal().success({
    title: '温馨提醒',
    content: '这是 success 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalWarning() {
  useFmModal().warning({
    title: '温馨提醒',
    content: '这是 warning 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalError() {
  useFmModal().error({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
    },
  })
}
function showModalConfirm() {
  useFmModal().confirm({
    title: '温馨提醒',
    content: '这是 confirm 弹窗',
    onConfirm: () => {
      toast.info('你点了确定')
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
          toast.success('成功了！')
          done()
        }
        else {
          toast.error('失败了！')
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
  <FmPageLayout navbar navbar-start-side="back">
    <div>
      <FmPageMain title="弹窗">
        <FmButton @click="modal = true">
          打开
        </FmButton>
        <FmModal v-model="modal" title="标题" description="这里是一段描述介绍" :closable="modalInfo.closable" :center="modalInfo.center" :loading="modalInfo.loading" :header="modalInfo.header" :footer="modalInfo.footer" :before-close="handleBeforeClose">
          <div :class="modalInfo.contentHeight">
            <div class="flex-start-center flex-wrap gap-2">
              <FmButton :variant="modalInfo.closable ? 'default' : 'outline'" class="w-full" @click="modalInfo.closable = !modalInfo.closable">
                关闭按钮
              </FmButton>
              <FmButton :variant="modalInfo.center ? 'default' : 'outline'" class="w-full" @click="modalInfo.center = !modalInfo.center">
                居中显示
              </FmButton>
              <FmButton :variant="modalInfo.header ? 'default' : 'outline'" class="w-full" @click="modalInfo.header = !modalInfo.header">
                头部区域
              </FmButton>
              <FmButton :variant="modalInfo.footer ? 'default' : 'outline'" class="w-full" @click="modalInfo.footer = !modalInfo.footer">
                尾部区域
              </FmButton>
              <FmButton :variant="!!modalInfo.contentHeight ? 'default' : 'outline'" class="w-full" @click="modalInfo.contentHeight = !!modalInfo.contentHeight ? '' : 'h-400'">
                切换内容高度
              </FmButton>
              <FmButton variant="outline" class="w-full" @click="modalInfo.loading = true">
                显示加载中
              </FmButton>
            </div>
          </div>
        </FmModal>
      </FmPageMain>
      <FmPageMain title="对话框">
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
          <FmButton @click="showModalPromiseConfirm">
            Confirm with promise
          </FmButton>
        </div>
      </FmPageMain>
    </div>
  </FmPageLayout>
</template>
