import React from 'react'
import PropType from 'prop-types'
import User from './User'

const UsersTable = ({ users, removeUserHandler, onToggleFavorite }) => {
  return (
    <table className="table">
      <thead>
        <tr key={'user._id'}>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценка</th>
          <th scope="col">Избранное</th>
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
  onToggleFavorite: PropType.func.isRequired
}
