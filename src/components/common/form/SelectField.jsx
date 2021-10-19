import React from 'react'
import PropTypes from 'prop-types'

const SelectField = ({ label, value, onChange, defaultOption, options, error }) => {
  const getInputClasses = () => {
    return `form-select ` + (error ? 'is-invalid' : 'is-valid')
  }
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((name) => ({ name: options[name].name, value: options[name]._id }))
      : options
  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id="validationCustom04"
        name="profession"
        value={value}
        onChange={onChange}
      >
        <option selected={value === ''} disabled value="">
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((key) => (
            <option selected={key.value === value} key={key.value} value={key.value}>
              {key.name}
            </option>
          ))}
        {/* {professions &&
          Object.keys(professions).map((key) => (
            <option
              selected={professions[key]._id === value}
              key={professions[key]._id}
              value={professions[key]._id}
            >
              {professions[key].name}
            </option>
          ))} */}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultOption: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default SelectField
