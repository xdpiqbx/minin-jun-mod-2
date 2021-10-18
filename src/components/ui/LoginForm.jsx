import React, { useEffect, useState } from 'react'
import TextField from '../common/form/TextField'
import { validator } from '../../utils/validator'

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполения' },
      isEmail: { message: 'Email введён некорректно' }
    },
    password: {
      isRequired: { message: 'Щас без пароля никак =(' },
      isCapitalSymbol: { message: 'Пароль до должен содержать заглавную букву' },
      isContainDigit: { message: 'Пароль до должен содержать число' },
      min: { message: 'Минимальная длинна 8 симолов', value: 8 }
    }
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = validator(data, validatorConfig)
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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Login</h3>
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
            <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
