<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import * as z from 'zod'
import { FormControl, FormField, FormItem, FormMessage } from '@/ui/shadcn/ui/form'

definePage({
  name: 'login',
  meta: {
    title: '登录',
  },
})

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const redirect = ref(route.query.redirect?.toString() ?? '/')
const loading = ref(false)

const form = useForm({
  validationSchema: toTypedSchema(z.object({
    account: z.string().min(1, '请填写用户名'),
    password: z.string().min(1, '请填写密码'),
  })),
  initialValues: {
    account: '',
    password: '',
  },
})
const onSubmit = form.handleSubmit((values) => {
  loading.value = true
  userStore.login(values).then(() => {
    router.replace(redirect.value)
  }).finally(() => {
    loading.value = false
  })
})

function testAccount(account: string) {
  form.setFieldValue('account', account)
  form.setFieldValue('password', '123456')
  onSubmit()
}
</script>

<template>
  <FmPageLayout :navbar="false" copyright>
    <div class="mx-4 flex flex-1 flex-col justify-center gap-8">
      <img src="@/assets/images/logo.png" class="mx-auto h-24 w-24">
      <form @submit="onSubmit">
        <div class="mx-4 overflow-hidden border rounded-xl bg-card divide-y">
          <FormField v-slot="{ componentField }" name="account">
            <FormItem class="p-1 space-y-0">
              <FormControl>
                <FmInput type="text" placeholder="用户名" class="w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0" v-bind="componentField" />
              </FormControl>
              <Transition enter-active-class="transition-opacity" enter-from-class="opacity-0" leave-active-class="transition-opacity" leave-to-class="opacity-0">
                <FormMessage class="pb-2 pl-3 text-xs" />
              </Transition>
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem class="p-1 space-y-0">
              <FormControl>
                <FmInput type="password" placeholder="密码" class="w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0" v-bind="componentField" />
              </FormControl>
              <Transition enter-active-class="transition-opacity" enter-from-class="opacity-0" leave-active-class="transition-opacity" leave-to-class="opacity-0">
                <FormMessage class="pb-2 pl-3 text-xs" />
              </Transition>
            </FormItem>
          </FormField>
        </div>
        <div class="mt-8 px-4">
          <FmButton :loading class="w-full" type="submit">
            登录
          </FmButton>
          <FmDivider>
            演示账号一键登录
          </FmDivider>
          <div class="text-center space-x-4">
            <FmButton size="sm" @click="testAccount('admin')">
              admin
            </FmButton>
            <FmButton variant="outline" size="sm" @click="testAccount('test')">
              test
            </FmButton>
          </div>
        </div>
      </form>
    </div>
    <svg width="100%" viewBox="0 0 1440 590" xmlns="http://www.w3.org/2000/svg" class="svg pointer-events-none transition duration-300 delay-150 ease-in-out"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7" /><stop offset="95%" stop-color="#8ED1FC" /></linearGradient></defs><path d="M 0,600 L 0,150 C 154.10714285714283,165.39285714285714 308.21428571428567,180.78571428571428 424,163 C 539.7857142857143,145.21428571428572 617.2500000000001,94.25 735,94 C 852.7499999999999,93.75 1010.7857142857142,144.21428571428572 1135,162 C 1259.2142857142858,179.78571428571428 1349.607142857143,164.89285714285714 1440,150 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="path-1 transition-all duration-300 delay-150 ease-in-out" /><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stop-color="#F78DA7" /><stop offset="95%" stop-color="#8ED1FC" /></linearGradient></defs><path d="M 0,600 L 0,350 C 144.10714285714286,333.7857142857143 288.2142857142857,317.57142857142856 389,313 C 489.7857142857143,308.42857142857144 547.25,315.5 657,321 C 766.75,326.5 928.7857142857142,330.42857142857144 1068,335 C 1207.2142857142858,339.57142857142856 1323.607142857143,344.7857142857143 1440,350 L 1440,600 L 0,600 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" class="path-2 transition-all duration-300 delay-150 ease-in-out" /></svg>
  </FmPageLayout>
</template>

<style scoped>
.svg {
  position: absolute;
  bottom: 0;
  z-index: 0;
}

.path-1 {
  animation: path-anim-1 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes path-anim-1 {
  0% {
    d: path("M 0,600 L 0,150 C 154.10714285714283,165.39285714285714 308.21428571428567,180.78571428571428 424,163 C 539.7857142857143,145.21428571428572 617.2500000000001,94.25 735,94 C 852.7499999999999,93.75 1010.7857142857142,144.21428571428572 1135,162 C 1259.2142857142858,179.78571428571428 1349.607142857143,164.89285714285714 1440,150 L 1440,600 L 0,600 Z");
  }

  25% {
    d: path("M 0,600 L 0,150 C 93.35714285714286,124.89285714285714 186.71428571428572,99.78571428571429 297,90 C 407.2857142857143,80.21428571428571 534.5,85.75 658,114 C 781.5,142.25 901.2857142857142,193.21428571428572 1031,203 C 1160.7142857142858,212.78571428571428 1300.357142857143,181.39285714285714 1440,150 L 1440,600 L 0,600 Z");
  }

  50% {
    d: path("M 0,600 L 0,150 C 86.85714285714286,184.78571428571428 173.71428571428572,219.57142857142858 306,199 C 438.2857142857143,178.42857142857142 616,102.49999999999999 753,78 C 890,53.500000000000014 986.2857142857142,80.42857142857143 1094,101 C 1201.7142857142858,121.57142857142857 1320.857142857143,135.78571428571428 1440,150 L 1440,600 L 0,600 Z");
  }

  75% {
    d: path("M 0,600 L 0,150 C 106.82142857142858,152.5 213.64285714285717,155 325,144 C 436.35714285714283,133 552.2499999999999,108.49999999999999 694,108 C 835.7500000000001,107.50000000000001 1003.3571428571429,131.00000000000003 1132,142 C 1260.642857142857,152.99999999999997 1350.3214285714284,151.5 1440,150 L 1440,600 L 0,600 Z");
  }

  100% {
    d: path("M 0,600 L 0,150 C 154.10714285714283,165.39285714285714 308.21428571428567,180.78571428571428 424,163 C 539.7857142857143,145.21428571428572 617.2500000000001,94.25 735,94 C 852.7499999999999,93.75 1010.7857142857142,144.21428571428572 1135,162 C 1259.2142857142858,179.78571428571428 1349.607142857143,164.89285714285714 1440,150 L 1440,600 L 0,600 Z");
  }
}

.path-2 {
  animation: path-anim-2 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes path-anim-2 {
  0% {
    d: path("M 0,600 L 0,350 C 144.10714285714286,333.7857142857143 288.2142857142857,317.57142857142856 389,313 C 489.7857142857143,308.42857142857144 547.25,315.5 657,321 C 766.75,326.5 928.7857142857142,330.42857142857144 1068,335 C 1207.2142857142858,339.57142857142856 1323.607142857143,344.7857142857143 1440,350 L 1440,600 L 0,600 Z");
  }

  25% {
    d: path("M 0,600 L 0,350 C 111.64285714285711,384.82142857142856 223.28571428571422,419.64285714285717 356,421 C 488.7142857142858,422.35714285714283 642.5000000000002,390.25 752,390 C 861.4999999999998,389.75 926.7142857142856,421.35714285714283 1034,420 C 1141.2857142857144,418.64285714285717 1290.6428571428573,384.32142857142856 1440,350 L 1440,600 L 0,600 Z");
  }

  50% {
    d: path("M 0,600 L 0,350 C 139.60714285714283,359.3571428571429 279.21428571428567,368.7142857142857 402,374 C 524.7857142857143,379.2857142857143 630.7500000000001,380.5 740,371 C 849.2499999999999,361.5 961.7857142857142,341.2857142857143 1079,336 C 1196.2142857142858,330.7142857142857 1318.107142857143,340.3571428571429 1440,350 L 1440,600 L 0,600 Z");
  }

  75% {
    d: path("M 0,600 L 0,350 C 136.53571428571428,364.5357142857143 273.07142857142856,379.07142857142856 370,362 C 466.92857142857144,344.92857142857144 524.2500000000001,296.25 654,282 C 783.7499999999999,267.75 985.9285714285716,287.92857142857144 1129,305 C 1272.0714285714284,322.07142857142856 1356.0357142857142,336.0357142857143 1440,350 L 1440,600 L 0,600 Z");
  }

  100% {
    d: path("M 0,600 L 0,350 C 144.10714285714286,333.7857142857143 288.2142857142857,317.57142857142856 389,313 C 489.7857142857143,308.42857142857144 547.25,315.5 657,321 C 766.75,326.5 928.7857142857142,330.42857142857144 1068,335 C 1207.2142857142858,339.57142857142856 1323.607142857143,344.7857142857143 1440,350 L 1440,600 L 0,600 Z");
  }
}
</style>
