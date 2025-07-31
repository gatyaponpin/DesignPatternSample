import type { Component } from 'vue'
import BasicForm from './BasicForm.vue'
import VipForm from './VipForm.vue'
import DeclineForm from './DeclineForm.vue'

export type FormComponentEntry<T = unknown> = {
  key: string
  label: string
  component: Component
  create: () => T
}

export const prototypeRegistry: FormComponentEntry[] = [
  {
    key: 'basic',
    label: '基本',
    component: BasicForm,
    create: () => ({ name: '', age: 0 })
  },
  {
    key: 'vip',
    label: 'VIP',
    component: VipForm,
    create: () => ({ name: '', age: 0, vipCode: '' })
  },
  {
    key: 'decline',
    label: '簡略',
    component: DeclineForm,
    create: () => ({ name: '', age: 0 })
  }
] 