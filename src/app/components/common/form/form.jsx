import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { validator } from '../../../utils/validator'

const FormComponent = ({ children, validatorConfog, onSubmit, defaultData }) => {
  const [data, setData] = useState(defaultData || {})
  const [errors, setErrors] = useState({})
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const validate = () => {
    const errors = validator(data, validatorConfog)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = validate()
    if (!isValid) return
    onSubmit(data)
  }

  useEffect(() => {
    if (Object.keys(data).length > 0) {
      validate()
    }
  }, [data])

  const isValid = Object.keys(errors).length === 0

  const clonedElements = React.Children.map(children, (child) => {
    const childType = typeof child.type
    let config = {}
    if (childType === 'function') {
      if (!child.props.name) {
        throw new Error('Name property is requred for field component', child)
      }
      config = {
        ...child.props,
        onChange: handleChange,
        value: data[child.props.name] || '',
        error: errors[child.props.name]
      }
    }
    if (childType === 'string') {
      if (child.type === 'button') {
        if (child.props.type === 'submit' || child.props.type === undefined) {
          config = { ...child.props, disabled: !isValid }
        }
      }
    }
    return React.cloneElement(child, config)
  })
  return <form onSubmit={handleSubmit}>{clonedElements}</form>
}

FormComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  onSubmit: PropTypes.func,
  validatorConfog: PropTypes.object,
  defaultData: PropTypes.object
}

export default FormComponent
