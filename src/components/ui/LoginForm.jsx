import React, { useEffect, useState } from 'react'
// import * as yup from 'yup'
import TextField from '../common/form/TextField'
import { validator } from '../../utils/validator'
import CheckBoxField from '../common/form/CheckBoxField'

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '', stayOn: false })
  const [errors, setErrors] = useState({})

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  // const validationSchema = yup.object().shape({
  //   password: yup
  //     .string()
  //     .required('Щас без пароля никак =(')
  //     .matches(/(?=.*[A-Z])/, 'Пароль должен содержать заглавную букву')
  //     .matches(/(?=.*[0-9])/, 'Пароль должен содержать число')
  //     .matches(/(?=.*[!@#$%^&*])/, 'Пароль должен содержать один из символов !@#$%^&*')
  //     .matches(/(?=.{8,})/, 'Пароль должен содержать минимум 8 символов'),
  //   email: yup
  //     .string()
  //     .required('Электронная почта обязательна для заполения')
  //     .email('Email введён некорректно')
  // })

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполения' },
      isEmail: { message: 'Email введён некорректно' }
    },
    password: {
      isRequired: { message: 'Щас без пароля никак =(' },
      isCapitalSymbol: { message: 'Пароль должен содержать заглавную букву' },
      isContainDigit: { message: 'Пароль должен содержать число' },
      min: { message: 'Минимальная длинна 8 симолов', value: 8 }
    }
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
    // validationSchema
    //   .validate(data)
    //   .then(() => setErrors({}))
    //   .catch((error) => setErrors({ [error.path]: error.message }))
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) {
      return
    }
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">
        Оставатся в системе
      </CheckBoxField>
      <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">
        Submit
      </button>
    </form>
  )
}

export default LoginForm
