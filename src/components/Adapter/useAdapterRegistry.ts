import type { Component } from 'vue'
import ExternalUserCard from './ExternalUserCard.vue'
import { adaptUserA, adaptUserB } from './UserAdapter'

export type AdapterComponentEntry<T = unknown> = {
  key: string
  label: string
  component: Component
  create: () => T
}

export const adapterRegistry: AdapterComponentEntry[] = [
  {
    key: 'apiA',
    label: 'API A ユーザー',
    component: ExternalUserCard,
    create: () => adaptUserA({
      user_id: '001',
      user_name: '山田一郎',
      user_email: 'ichi@example.com'
    })
  },
  {
    key: 'apiB',
    label: 'API B ユーザー',
    component: ExternalUserCard,
    create: () => adaptUserB({
      id: '002',
      full_name: '佐藤花子',
      mail: 'hana@example.com'
    })
  }
]
