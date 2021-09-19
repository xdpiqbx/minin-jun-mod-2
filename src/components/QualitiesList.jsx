import React from 'react'
import PropType from 'prop-types'
import QualitieBadge from './QualitieBadge'

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((quality) => (
        <QualitieBadge key={quality.name} quality={quality} />
      ))}
    </>
  )
}

QualitiesList.propTypes = {
  qualities: PropType.array.isRequired
}

export default QualitiesList
