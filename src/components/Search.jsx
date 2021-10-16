import React, { useState } from 'react'
import PropType from 'prop-types'

const Search = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleChange = (event) => {
    setSearchQuery(event.target.value)
    handleSearch(event.target.value)
  }

  return (
    <input
      className="form-control"
      type="text"
      placeholder="Search..."
      aria-label="search"
      value={searchQuery}
      onChange={handleChange}
    />
  )
}

Search.propTypes = {
  handleSearch: PropType.func
}

export default Search
