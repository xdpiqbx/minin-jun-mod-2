import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
  items,
  valProp,
  contentProp,
  onItemSelect,
  selectedItem
}) => {
  return (
    <ul className="list-group">
      {Object.keys(items).map((item) => {
        return (
          <li
            className={
              'list-group-item' +
              (items[item] === selectedItem ? ' active' : '')
            }
            key={items[item][valProp]}
            onClick={() => onItemSelect(items[item])}
            role="button"
          >
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
  contentProp: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object
}

export default GroupList
