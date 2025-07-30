import { FormBuilder } from './FormBuilder'
import type { FieldConfig } from './FormBuilder'

export function createBasicForm(): FieldConfig[] {
  return new FormBuilder()
    .addField('氏名', 'name', 'text')
    .addField('メールアドレス', 'email', 'email')
    .build()
}