export function validator(data, config) {
  const errors = {}
  const validate = (validateMethod, data, config) => {
    switch (validateMethod) {
      case 'isRequired':
        if (data.trim() === '') {
          return config.message
        }
        break
      default:
        console.log('default')
        break
    }
  }
  for (const fieldNmae in data) {
    for (const validateMethod in config[fieldNmae]) {
      const error = validate(validateMethod, data[fieldNmae], config[fieldNmae][validateMethod])
      if (error) {
        errors[fieldNmae] = error
      }
    }
  }
  return errors
}
