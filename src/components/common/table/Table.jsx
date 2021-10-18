import React from 'react'
import PropType from 'prop-types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const Table = ({ data, onSort, selectedSort, columns, children }) => {
  return (
    <table className="table">
      {children || (
        <>
          <TableHeader onSort={onSort} selectedSort={selectedSort} columns={columns} />
          <TableBody data={data} columns={columns} />
        </>
      )}
    </table>
  )
}

Table.propTypes = {
  data: PropType.array,
  onSort: PropType.func,
  selectedSort: PropType.object,
  columns: PropType.object,
  children: PropType.array
}

export default Table
