<script setup lang="ts">
import 'animate.css'

definePage({
  meta: {
    title: '过渡动画',
  },
})

const show = ref(false)

const animateList = ref([
  // Attention seekers
  { text: 'bounce', value: 'animate__bounce' },
  { text: 'flash', value: 'animate__flash' },
  { text: 'pulse', value: 'animate__pulse' },
  { text: 'rubberBand', value: 'animate__rubberBand' },
  { text: 'shakeX', value: 'animate__shakeX' },
  { text: 'shakeY', value: 'animate__shakeY' },
  { text: 'headShake', value: 'animate__headShake' },
  { text: 'swing', value: 'animate__swing' },
  { text: 'tada', value: 'animate__tada' },
  { text: 'wobble', value: 'animate__wobble' },
  { text: 'jello', value: 'animate__jello' },
  { text: 'heartBeat', value: 'animate__heartBeat' },
  // Back entrances
  { text: 'backInDown', value: 'animate__backInDown' },
  { text: 'backInLeft', value: 'animate__backInLeft' },
  { text: 'backInRight', value: 'animate__backInRight' },
  { text: 'backInUp', value: 'animate__backInUp' },
  // Back exits
  { text: 'backOutDown', value: 'animate__backOutDown' },
  { text: 'backOutLeft', value: 'animate__backOutLeft' },
  { text: 'backOutRight', value: 'animate__backOutRight' },
  { text: 'backOutUp', value: 'animate__backOutUp' },
  // Bouncing entrances
  { text: 'bounceIn', value: 'animate__bounceIn' },
  { text: 'bounceInDown', value: 'animate__bounceInDown' },
  { text: 'bounceInLeft', value: 'animate__bounceInLeft' },
  { text: 'bounceInRight', value: 'animate__bounceInRight' },
  { text: 'bounceInUp', value: 'animate__bounceInUp' },
  // Bouncing exits
  { text: 'bounceOut', value: 'animate__bounceOut' },
  { text: 'bounceOutDown', value: 'animate__bounceOutDown' },
  { text: 'bounceOutLeft', value: 'animate__bounceOutLeft' },
  { text: 'bounceOutRight', value: 'animate__bounceOutRight' },
  { text: 'bounceOutUp', value: 'animate__bounceOutUp' },
  // Fading entrances
  { text: 'fadeIn', value: 'animate__fadeIn' },
  { text: 'fadeInDown', value: 'animate__fadeInDown' },
  { text: 'fadeInDownBig', value: 'animate__fadeInDownBig' },
  { text: 'fadeInLeft', value: 'animate__fadeInLeft' },
  { text: 'fadeInLeftBig', value: 'animate__fadeInLeftBig' },
  { text: 'fadeInRight', value: 'animate__fadeInRight' },
  { text: 'fadeInRightBig', value: 'animate__fadeInRightBig' },
  { text: 'fadeInUp', value: 'animate__fadeInUp' },
  { text: 'fadeInUpBig', value: 'animate__fadeInUpBig' },
  { text: 'fadeInTopLeft', value: 'animate__fadeInTopLeft' },
  { text: 'fadeInTopRight', value: 'animate__fadeInTopRight' },
  { text: 'fadeInBottomLeft', value: 'animate__fadeInBottomLeft' },
  { text: 'fadeInBottomRight', value: 'animate__fadeInBottomRight' },
  // Fading exits
  { text: 'fadeOut', value: 'animate__fadeOut' },
  { text: 'fadeOutDown', value: 'animate__fadeOutDown' },
  { text: 'fadeOutDownBig', value: 'animate__fadeOutDownBig' },
  { text: 'fadeOutLeft', value: 'animate__fadeOutLeft' },
  { text: 'fadeOutLeftBig', value: 'animate__fadeOutLeftBig' },
  { text: 'fadeOutRight', value: 'animate__fadeOutRight' },
  { text: 'fadeOutRightBig', value: 'animate__fadeOutRightBig' },
  { text: 'fadeOutUp', value: 'animate__fadeOutUp' },
  { text: 'fadeOutUpBig', value: 'animate__fadeOutUpBig' },
  { text: 'fadeOutTopLeft', value: 'animate__fadeOutTopLeft' },
  { text: 'fadeOutTopRight', value: 'animate__fadeOutTopRight' },
  { text: 'fadeOutBottomLeft', value: 'animate__fadeOutBottomLeft' },
  { text: 'fadeOutBottomRight', value: 'animate__fadeOutBottomRight' },
  // Flippers
  { text: 'flip', value: 'animate__flip' },
  { text: 'flipInX', value: 'animate__flipInX' },
  { text: 'flipInY', value: 'animate__flipInY' },
  { text: 'flipOutX', value: 'animate__flipOutX' },
  { text: 'flipOutY', value: 'animate__flipOutY' },
  // Lightspeed
  { text: 'lightSpeedInRight', value: 'animate__lightSpeedInRight' },
  { text: 'lightSpeedInLeft', value: 'animate__lightSpeedInLeft' },
  { text: 'lightSpeedOutRight', value: 'animate__lightSpeedOutRight' },
  { text: 'lightSpeedOutLeft', value: 'animate__lightSpeedOutLeft' },
  // Rotating entrances
  { text: 'rotateIn', value: 'animate__rotateIn' },
  { text: 'rotateInDownLeft', value: 'animate__rotateInDownLeft' },
  { text: 'rotateInDownRight', value: 'animate__rotateInDownRight' },
  { text: 'rotateInUpLeft', value: 'animate__rotateInUpLeft' },
  { text: 'rotateInUpRight', value: 'animate__rotateInUpRight' },
  // Rotating exits
  { text: 'rotateOut', value: 'animate__rotateOut' },
  { text: 'rotateOutDownLeft', value: 'animate__rotateOutDownLeft' },
  { text: 'rotateOutDownRight', value: 'animate__rotateOutDownRight' },
  { text: 'rotateOutUpLeft', value: 'animate__rotateOutUpLeft' },
  { text: 'rotateOutUpRight', value: 'animate__rotateOutUpRight' },
  // Specials
  { text: 'hinge', value: 'animate__hinge' },
  { text: 'jackInTheBox', value: 'animate__jackInTheBox' },
  { text: 'rollIn', value: 'animate__rollIn' },
  { text: 'rollOut', value: 'animate__rollOut' },
  // Zooming entrances
  { text: 'zoomIn', value: 'animate__zoomIn' },
  { text: 'zoomInDown', value: 'animate__zoomInDown' },
  { text: 'zoomInLeft', value: 'animate__zoomInLeft' },
  { text: 'zoomInRight', value: 'animate__zoomInRight' },
  { text: 'zoomInUp', value: 'animate__zoomInUp' },
  // Zooming exits
  { text: 'zoomOut', value: 'animate__zoomOut' },
  { text: 'zoomOutDown', value: 'animate__zoomOutDown' },
  { text: 'zoomOutLeft', value: 'animate__zoomOutLeft' },
  { text: 'zoomOutRight', value: 'animate__zoomOutRight' },
  { text: 'zoomOutUp', value: 'animate__zoomOutUp' },
  // Sliding entrances
  { text: 'slideInDown', value: 'animate__slideInDown' },
  { text: 'slideInLeft', value: 'animate__slideInLeft' },
  { text: 'slideInRight', value: 'animate__slideInRight' },
  { text: 'slideInUp', value: 'animate__slideInUp' },
  // Sliding exits
  { text: 'slideOutDown', value: 'animate__slideOutDown' },
  { text: 'slideOutLeft', value: 'animate__slideOutLeft' },
  { text: 'slideOutRight', value: 'animate__slideOutRight' },
  { text: 'slideOutUp', value: 'animate__slideOutUp' },
])

const animateIn = ref('animate__bounce')
const animateOut = ref('animate__bounce')

const showPicker1 = ref(false)
function onConfirm1({ selectedOptions }: any) {
  showPicker1.value = false
  animateIn.value = selectedOptions[0].value
}
const showPicker2 = ref(false)
function onConfirm2({ selectedOptions }: any) {
  showPicker2.value = false
  animateOut.value = selectedOptions[0].value
}

const flag = ref(true)
</script>

<template>
  <FmPageLayout navbar navbar-start-side="back">
    <template #navbar-end>
      <div class="h-full flex-center px-1" @click="show = true">
        <FmIcon name="i-mdi:information" class="text-4" />
      </div>
      <van-action-sheet v-model:show="show" teleport="body">
        <div class="whitespace-break-spaces p-4 space-y-2">
          <div>
            「插件」栏目下均为第三方插件的演示页面，框架默认并不包含这些插件。如需使用，请先安装对应插件。
          </div>
          <div>安装命令：</div>
          <div class="space-x-2">
            <van-tag type="primary" plain>
              pnpm add animate.css
            </van-tag>
          </div>
        </div>
      </van-action-sheet>
    </template>
    <div class="flex flex-col gap-4 p-4">
      <div>
        <van-field is-link readonly label="进入动画（显示）" label-width="8em" @click="showPicker1 = true">
          <template #input>
            {{ animateList.find(item => item.value === animateIn)?.text }}
          </template>
        </van-field>
        <van-popup v-model:show="showPicker1" round position="bottom">
          <van-picker :columns="animateList" @cancel="showPicker1 = false" @confirm="onConfirm1" />
        </van-popup>
        <van-field is-link readonly label="离开动画（隐藏）" label-width="8em" @click="showPicker2 = true">
          <template #input>
            {{ animateList.find(item => item.value === animateOut)?.text }}
          </template>
        </van-field>
        <van-popup v-model:show="showPicker2" round position="bottom">
          <van-picker :columns="animateList" @cancel="showPicker2 = false" @confirm="onConfirm2" />
        </van-popup>
      </div>
      <FmPageMain class="m-0">
        <FmButton @click="flag = !flag">
          {{ flag ? '隐藏' : '显示' }}
        </FmButton>
        <Transition :enter-active-class="`animate__animated ${animateIn}`" :leave-active-class="`animate__animated ${animateOut}`">
          <div v-if="flag" class="mt-2 h-100px w-100px bg-blue" />
        </Transition>
      </FmPageMain>
    </div>
  </FmPageLayout>
</template>
