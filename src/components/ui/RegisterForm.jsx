import React, { useEffect, useState } from 'react'
import TextField from '../common/form/TextField'
import { validator } from '../../utils/validator'
import API from '../../API'
import SelectField from '../common/form/SelectField'
import RadioField from '../common/form/RadioField'

const RegisterForm = () => {
  const [data, setData] = useState({ email: '', password: '', profession: '', sex: 'male' })
  const [professions, setProfessions] = useState()
  const [errors, setErrors] = useState({})

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

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
    },
    profession: {
      isRequired: { message: 'Обязательно выберите вашу профессию' }
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
      <SelectField
        label="Выберите вашу професию"
        value={data.profession}
        onChange={handleChange}
        defaultOption="Choose..."
        options={professions}
        error={errors.profession}
      />
      <RadioField
        options={[
          { name: 'Male', value: 'male' },
          { name: 'Female', value: 'female' },
          { name: 'Other', value: 'other' }
        ]}
        value={data.sex}
        name="sex"
        onChange={handleChange}
      />
      <button type="submit" disabled={!isValid} className="btn btn-primary w-100 mx-auto">
        Submit
      </button>
    </form>
  )
}

export default RegisterForm
