import React from 'react'
import PropType from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc'
      })
    } else {
      onSort({ path: item, order: 'asc' })
    }
  }

  return (
    <thead>
      <tr key={'user._id'}>
        {Object.keys(columns).map((col) => (
          <th
            key={col}
            onClick={columns[col].path ? () => handleSort(columns[col].path) : undefined}
            {...{ role: columns[col].path && 'button' }}
            scope="col"
          >
            {columns[col].name}
          </th>
        ))}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  onSort: PropType.func.isRequired,
  selectedSort: PropType.object.isRequired,
  columns: PropType.object
}

export default TableHeader
