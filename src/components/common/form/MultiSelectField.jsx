import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
const MultiSelectField = ({ options, onChange, name }) => {
  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((name) => ({
          label: options[name].name,
          value: options[name]._id
        }))
      : options
  return (
    <Select
      isMulti
      options={optionsArray}
      className="basic-multi-select"
      classNamePrefix="select"
      onChange={onChange}
    />
  )
}
// 7^55 5. Множественный select
MultiSelectField.propTypes = {
  onChange: PropTypes.func,
  name: PropTypes.string,
  options: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default MultiSelectField
