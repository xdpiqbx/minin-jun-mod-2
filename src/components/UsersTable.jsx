import React from 'react'
import PropType from 'prop-types'
import User from './User'

const UsersTable = ({
  users,
  onSort,
  currentSort,
  removeUserHandler,
  onToggleFavorite
}) => {
  const handleSort = (item) => {
    if (currentSort.iter === item) {
      onSort({
        ...currentSort,
        order: currentSort.order === 'asc' ? 'desc' : 'asc'
      })
    } else {
      onSort({ iter: item, order: 'asc' })
    }
  }
  return (
    <table className="table">
      <thead>
        <tr key={'user._id'}>
          <th
            onClick={() => {
              handleSort('name')
            }}
            scope="col"
          >
            Имя
          </th>
          <th scope="col">Качества</th>
          <th
            onClick={() => {
              handleSort('profession.name')
            }}
            scope="col"
          >
            Профессия
          </th>
          <th
            onClick={() => {
              handleSort('completedMeetings')
            }}
            scope="col"
          >
            Встретился, раз
          </th>
          <th
            onClick={() => {
              handleSort('rate')
            }}
            scope="col"
          >
            Оценка
          </th>
          <th
            onClick={() => {
              handleSort('bookmark')
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
  onSort: PropType.func.isRequired,
  currentSort: PropType.object.isRequired
}
