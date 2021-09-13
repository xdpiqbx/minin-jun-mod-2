import React from 'react'
import PropType from 'prop-types'
const QualitieBadge = ({ quality }) => {
  const { name, color } = quality
  return <span className={`badge bg-${color} m-1`}>{name}</span>
}

QualitieBadge.propTypes = {
  quality: PropType.object.isRequired
}

export default QualitieBadge
