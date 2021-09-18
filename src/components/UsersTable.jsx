import React from 'react'
import PropType from 'prop-types'
import User from './User'

const UsersTable = ({ users, onSort, removeUserHandler, onToggleFavorite }) => {
  return (
    <table className="table">
      <thead>
        <tr key={'user._id'}>
          <th
            onClick={() => {
              onSort('name')
            }}
            scope="col"
          >
            Имя
          </th>
          <th scope="col">Качества</th>
          <th
            onClick={() => {
              onSort('profession.name')
            }}
            scope="col"
          >
            Профессия
          </th>
          <th
            onClick={() => {
              onSort('completedMeetings')
            }}
            scope="col"
          >
            Встретился, раз
          </th>
          <th
            onClick={() => {
              onSort('rate')
            }}
            scope="col"
          >
            Оценка
          </th>
          <th
            onClick={() => {
              onSort('bookmark')
            }}
            scope="col"
          >
            Избранное
          </th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
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
  onSort: PropType.func.isRequired
}
