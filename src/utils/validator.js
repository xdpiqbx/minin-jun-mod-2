export function validator(data, config) {
  const errors = {}
  const validate = (validateMethod, data, config) => {
    let statusValidate
    switch (validateMethod) {
      case 'isRequired':
        statusValidate = data.trim() === ''
        break
      case 'isEmail': {
        const emailRegExp = /^\S+@\S+\.\S+$/g
        statusValidate = !emailRegExp.test(data)
        break
      }
      case 'isCapitalSymbol': {
        const capitalRegExp = /[A-Z]+/g
        statusValidate = !capitalRegExp.test(data)
        break
      }
      case 'isContainDigit': {
        const digitRegExp = /\d+/g
        statusValidate = !digitRegExp.test(data)
        break
      }
      case 'min': {
        statusValidate = data.length < config.value
        break
      }
      default:
        console.log('default')
        break
    }
    if (statusValidate) {
      return config.message
    }
  }
  for (const fieldNmae in data) {
    for (const validateMethod in config[fieldNmae]) {
      const error = validate(validateMethod, data[fieldNmae], config[fieldNmae][validateMethod])
      if (error && !errors[fieldNmae]) {
        errors[fieldNmae] = error
      }
    }
  }
  return errors
}
