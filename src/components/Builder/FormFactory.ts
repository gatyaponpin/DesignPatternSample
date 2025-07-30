import { createBasicForm } from './BasicFormDirector'
import { createRegisterForm } from './RegisterFormDirector'
import { createContactForm } from './ContactFormDirector'
import type { FieldConfig } from './FormBuilder'

export const formTypes = ['basic', 'register', 'contact'] as const
export type FormType = typeof formTypes[number]

export function getFormConfig(type: FormType): FieldConfig[] {
  switch (type) {
    case 'basic':
      return createBasicForm()
    case 'register':
      return createRegisterForm()
    case 'contact':
      return createContactForm()
    default:
      return []
  }
}