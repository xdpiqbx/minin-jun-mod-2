import React from 'react'
import PropType from 'prop-types'
import BookMark from './BookMark'
import QualitieBadge from './QualitieBadge'

const User = ({ user, onRemoveUserHandler, onToggleFavorite }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((quality) => (
          <QualitieBadge key={quality.name} quality={quality} />
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        <BookMark
          isFavorite={user.isFavorite}
          onToggleFavorite={() => onToggleFavorite(user._id)}
        />
      </td>
      <td>
        <button
          onClick={() => onRemoveUserHandler(user._id)}
          type="button"
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  )
}

User.propTypes = {
  user: PropType.object.isRequired,
  onRemoveUserHandler: PropType.func.isRequired,
  onToggleFavorite: PropType.func.isRequired
}

export default User
