import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
  items,
  valProp,
  contentProp,
  onItemSelect,
  selectedItem
}) => {
  if (!Array.isArray(items)) {
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
  return (
    <ul className="list-group">
      {items.map((item) => {
        return (
          <li
            className={
              'list-group-item' + (item === selectedItem ? ' active' : '')
            }
            key={item[valProp]}
            onClick={() => onItemSelect(item)}
            role="button"
          >
            {item[contentProp]}
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
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valProp: PropTypes.string.isRequired,
  contentProp: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object
}

export default GroupList
