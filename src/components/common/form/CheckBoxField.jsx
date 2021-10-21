import React from 'react'
import PropTypes from 'prop-types'
const CheckBoxField = ({ name, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={name}>
        Default checkbox
      </label>
    </div>
  )
}
// 1:40 checkbox

CheckBoxField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.bool
}

export default CheckBoxField
