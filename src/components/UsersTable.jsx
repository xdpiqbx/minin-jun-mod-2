import React from 'react'
import PropType from 'prop-types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

const UsersTable = ({ users, onSort, selectedSort, removeUserHandler, onToggleFavorite }) => {
  const columns = {
    name: { path: 'name', name: 'Имя' },
    qualities: { name: 'Качества' },
    profession: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: { path: 'bookmark', name: 'Избранное' },
    delete: {}
  }

  return (
    <table className="table">
      <TableHeader onSort={onSort} selectedSort={selectedSort} columns={columns} />
      <TableBody data={users} columns={columns} />
    </table>
  )
}

UsersTable.propTypes = {
  users: PropType.array.isRequired,
  removeUserHandler: PropType.func.isRequired,
  onToggleFavorite: PropType.func.isRequired,
  onSort: PropType.func.isRequired,
  selectedSort: PropType.object.isRequired
}

export default UsersTable
