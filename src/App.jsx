import React, { useEffect, useState } from 'react'
import API from './API/index'
import Users from './components/Users'

const App = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    API.users.fetchAll().then((data) => {
      return setUsers(data)
    })
  }, [])

  const removeUser = (id) => {
    setUsers(users.filter((user) => user._id !== id))
  }

  const toggleFavorite = (userId) => {
    setUsers(
      users.filter((user) => {
        if (user._id === userId) {
          user.bookmark = !user.bookmark
          return user
        }
        return user
      })
    )
  }

  // console.log(users)

  return (
    <>
      {users && (
        <Users users={users} onRemoveUserHandler={removeUser} onToggleFavorite={toggleFavorite} />
      )}
    </>
  )
}

export default App
