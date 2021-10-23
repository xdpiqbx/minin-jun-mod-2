import React, { useEffect, useState } from 'react'
import PropType from 'prop-types'
import API from '../../../API'
import QualitiesList from '../../ui/qualities/QualitiesList'
import { useHistory } from 'react-router-dom'

const UserPage = ({ userId }) => {
  const history = useHistory()
  const [user, setUser] = useState(null)
  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data))
  }, [])
  const handleClickAllUsers = () => {
    history.push(history.location.pathname + '/edit')
  }
  if (user) {
    return (
      <div>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>Встреч: {user.completedMeetings}</p>
        <h2>Оценка: {user.rate}</h2>
        <button onClick={handleClickAllUsers}>Edit</button>
      </div>
    )
  } else {
    return <h1>Loading...</h1>
  }
}

UserPage.propTypes = {
  userId: PropType.string.isRequired
}

export default UserPage
