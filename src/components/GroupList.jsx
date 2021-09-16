import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({ items, valProp, contentProp }) => {
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => {
        return (
          <li className="list-group-item" key={items[item][valProp]}>
            {items[item][contentProp]}
          </li>
        )
      })}
    </ul>
  )
}

GroupList.defaultProps = {
  valProp: '_id',
  contentProp: 'name'
}

GroupList.propTypes = {
  items: PropTypes.object.isRequired,
  valProp: PropTypes.string.isRequired,
  contentProp: PropTypes.string.isRequired
}

export default GroupList
