import React from 'react'
import PropType from 'prop-types'
import User from './User'
import TableHeader from './TableHeader'

const UsersTable = ({ users, onSort, selectedSort, removeUserHandler, onToggleFavorite }) => {
  const columns = {
    name: { iter: 'name', name: 'Имя' },
    qualities: { name: 'Качества' },
    profession: { iter: 'profession.name', name: 'Профессия' },
    completedMeetings: { iter: 'completedMeetings', name: 'Встретился, раз' },
    rate: { iter: 'rate', name: 'Оценка' },
    bookmark: { iter: 'bookmark', name: 'Избранное' },
    delete: {}
  }
  return (
    <table className="table">
      <TableHeader onSort={onSort} selectedSort={selectedSort} columns={columns} />
      <tbody>
        {users.map((user) => (
          <User
            key={user._id}
            user={user}
            onRemoveUserHandler={removeUserHandler}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </tbody>
    </table>
  )
}

export default UsersTable

UsersTable.propTypes = {
  users: PropType.array.isRequired,
  removeUserHandler: PropType.func.isRequired,
  onToggleFavorite: PropType.func.isRequired,
  onSort: PropType.func.isRequired,
  selectedSort: PropType.object.isRequired
}
