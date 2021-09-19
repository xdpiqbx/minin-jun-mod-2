import React from 'react'
import PropType from 'prop-types'
import _ from 'lodash'

const TableBody = ({ data, columns }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item._id}>
          {Object.keys(columns).map((col) => (
            <td key={col}>{_.get(item, columns[col].path)}</td>
          ))}
        </tr>
      ))}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropType.array.isRequired,
  columns: PropType.object.isRequired
}

export default TableBody
