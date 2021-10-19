import React, { useEffect, useState } from 'react'
import TextField from '../common/form/TextField'
import { validator } from '../../utils/validator'
import API from '../../API'

const RegisterForm = () => {
  const [data, setData] = useState({ email: '', password: '', profession: '' })
  const [professions, setProfessions] = useState()
  const [errors, setErrors] = useState({})

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  // useEffect(() => {
  //   console.log(professions)
  // }, [professions])

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
      <div className="mb-4">
        <label htmlFor="validationCustom04" className="form-label">
          State
        </label>
        <select
          className="form-select"
          id="validationCustom04"
          name="profession"
          value={data.profession}
          onChange={handleChange}
        >
          <option selected={data.profession === ''} disabled value="">
            Choose...
          </option>
          {professions &&
            Object.keys(professions).map((key) => (
              <option
                selected={professions[key]._id === data.profession}
                key={professions[key]._id}
                value={professions[key]._id}
              >
                {professions[key].name}
              </option>
            ))}
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">
        Submit
      </button>
    </form>
  )
}

export default RegisterForm
