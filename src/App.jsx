import React, { useState } from 'react'
import API from './API'
import Users from './components/Users'

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll())

  const removeUser = (id) => {
    setUsers(users.filter((user) => user._id !== id))
  }

  const toggleFavorite = (userId) => {
    setUsers(
      users.filter((user) => {
        if (user._id === userId) {
          user.isFavorite = !user.isFavorite
          return user
        }
        return user
      })
    )
  }

  return (
    <>
      {users.length === 0 ? (
        ''
      ) : (
        <Users
          users={users}
          removeUserHandler={removeUser}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </>
  )
}

export default App
