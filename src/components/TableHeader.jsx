import React from 'react'
import PropType from 'prop-types'

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.iter === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === 'asc' ? 'desc' : 'asc'
      })
    } else {
      onSort({ iter: item, order: 'asc' })
    }
  }

  return (
    <thead>
      <tr key={'user._id'}>
        {Object.keys(columns).map((col) => (
          <th
            key={col}
            onClick={columns[col].iter ? () => handleSort(columns[col].iter) : undefined}
            {...{ role: columns[col].iter && 'button' }}
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
