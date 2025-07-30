import { FormBuilder } from './FormBuilder'
import type { FieldConfig } from './FormBuilder'

export function createRegisterForm(): FieldConfig[] {
  return new FormBuilder()
    .addField('ユーザー名', 'username', 'text')
    .addField('パスワード', 'password', 'password')
    .addField('確認用パスワード', 'confirmPassword', 'password')
    .build()
}