import React, { useEffect, useState } from 'react'
import PropType from 'prop-types'
import API from '../../../API'
import UserCard from '../../ui/UserCard'
import QualitiesCard from '../../ui/QualitiesCard'
import MeetingsCard from '../../ui/MeetingsCard'
import Comments from '../../ui/Comments'

const UserPage = ({ userId }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    API.users.getById(userId).then((data) => setUser(data))
  }, [])
  if (user) {
    return (
      <div className="container">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <UserCard user={user} />
            <QualitiesCard data={user.qualities} />
            <MeetingsCard value={user.completedMeetings} />
          </div>
          <div className="col-md-8">
            <Comments />
          </div>
        </div>
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

UserPage.propTypes = {
  userId: PropType.string.isRequired
}

export default UserPage
