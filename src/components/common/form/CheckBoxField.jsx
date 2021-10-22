import React from 'react'
import PropTypes from 'prop-types'
const CheckBoxField = ({ name, value, onChange, children }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value })
  }
  return (
    <div className="form-check mb-4">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id={name}
        onChange={handleChange}
        checked={value}
      />
      <label className="form-check-label" htmlFor={name}>
        {children}
      </label>
    </div>
  )
}
// 7:00 checkbox

CheckBoxField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  value: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default CheckBoxField
