export function adaptUserA(data: {
  user_id: string
  user_name: string
  user_email: string
}) {
  return {
    id: data.user_id,
    name: data.user_name,
    email: data.user_email
  }
}

export function adaptUserB(data: {
  id: string
  full_name: string
  mail: string
}) {
  return {
    id: data.id,
    name: data.full_name,
    email: data.mail
  }
}