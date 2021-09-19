import React from 'react'
import PropType from 'prop-types'

const BookMark = ({ status, onToggleFavorite }) => {
  const iconYes = 'bi bi-hand-thumbs-up-fill'
  const iconNo = 'bi bi-hand-thumbs-down'
  return (
    <button onClick={onToggleFavorite}>
      <i className={status ? iconYes : iconNo} />
    </button>
  )
}

BookMark.propTypes = {
  status: PropType.bool,
  onToggleFavorite: PropType.func.isRequired
}

export default BookMark
