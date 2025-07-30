import { FormBuilder } from './FormBuilder'
import type { FieldConfig } from './FormBuilder'

export function createContactForm(): FieldConfig[] {
  return new FormBuilder()
    .addField('お名前', 'name', 'text')
    .addField('メールアドレス', 'email', 'email')
    .addField('お問い合わせ内容', 'message', 'text')
    .build()
}
