import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
const MultiSelectField = ({ options, onChange, name, label }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((name) => ({
          label: options[name].name,
          value: options[name]._id
        }))
      : options
  const handleChange = (value) => {
    onChange({ name: name, value })
  }
  return (
    <div className="mb-4">
      <label className="form-label">{label}</label>
      <Select
        isMulti
        closeMenuOnSelect={false}
        options={optionsArray}
        className="basic-multi-select"
        classNamePrefix="select"
        onChange={handleChange}
        name={name}
      />
    </div>
  )
}
// 7^55 5. Множественный select
MultiSelectField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default MultiSelectField
