import React from 'react'
import PropType from 'prop-types'

const UserPage = ({ userId }) => {
  return <h1>UserPage {userId}</h1>
}

UserPage.propTypes = {
  userId: PropType.string.isRequired
}

export default UserPage
