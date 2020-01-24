export const FORM_INITAL_STATE = { name: "", surname: "", login: "", password: "", email: "" };
export const FORM_CONFIG = [
  ['name', 'First name'],
  ['surname', 'Second name'],
  ['login', 'Your Login'],
  ['password', 'Your password'],
  ['email', 'Your email']
]

export const createFormItem = (name, placeholder, type = 'text') => {
  return { name, placeholder, type };
}