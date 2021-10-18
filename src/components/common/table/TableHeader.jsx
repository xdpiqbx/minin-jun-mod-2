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

  // const renderSortArrow = (colPath) => {
  //   if (selectedSort.path !== colPath) {
  //     return null
  //   }
  //   if (selectedSort.order === 'asc') {
  //     return <i className="bi bi-caret-down-fill"></i>
  //   }
  //   return <i className="bi bi-caret-up-fill"></i>
  // }
  const renderSortArrow = (colPath) => {
    return selectedSort.path !== colPath ? null : colPath && selectedSort.order === 'asc' ? (
      <i className="bi bi-caret-down-fill"></i>
    ) : (
      <i className="bi bi-caret-up-fill"></i>
    )
  }

  return (
    <thead>
      <tr key={'user._id'}>
        {Object.keys(columns).map((col) => {
          console.log()
          return (
            <th
              key={col}
              onClick={columns[col].path ? () => handleSort(columns[col].path) : undefined}
              {...{ role: columns[col].path && 'button' }}
              scope="col"
            >
              {columns[col].name}
              {renderSortArrow(columns[col].path)}
            </th>
          )
        })}
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
