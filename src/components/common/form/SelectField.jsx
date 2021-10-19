import React from 'react'
const SelectField = ({ label, value, onChange, defaultOption, options }) => {
  let optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((name) => ({ name: name, value: options[name]._id }))
      : options
  // START from 13 min!!! video 3!!!
  return (
    <div className="mb-4">
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        id="validationCustom04"
        name="profession"
        value={value}
        onChange={onChange}
      >
        <option selected={value === ''} disabled value="">
          {defaultOption}
        </option>
        {professions &&
          Object.keys(professions).map((key) => (
            <option
              selected={professions[key]._id === value}
              key={professions[key]._id}
              value={professions[key]._id}
            >
              {professions[key].name}
            </option>
          ))}
      </select>
      <div className="invalid-feedback">Please select a valid state.</div>
    </div>
  )
}

export default SelectField
