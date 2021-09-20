import React from 'react'
import PropType from 'prop-types'

const BookMark = ({ status, toggleBookmarkAction }) => {
  const iconYes = 'bi bi-hand-thumbs-up-fill'
  const iconNo = 'bi bi-hand-thumbs-down'
  return (
    <button onClick={() => toggleBookmarkAction()}>
      <i className={status ? iconYes : iconNo} />
    </button>
  )
}

BookMark.propTypes = {
  status: PropType.bool,
  toggleBookmarkAction: PropType.func
}

export default BookMark
