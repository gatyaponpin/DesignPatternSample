export type FieldConfig = {
  label: string
  name: string
  type: 'text' | 'email' | 'password'
}

export class FormBuilder {
  private fields: FieldConfig[] = []

  addField(label: string, name: string, type: FieldConfig['type']) {
    this.fields.push({ label, name, type })
    return this
  }

  build(): FieldConfig[] {
    return this.fields
  }
}