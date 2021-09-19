import React from 'react'
import PropType from 'prop-types'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import BookMark from './BookMark'

const UsersTable = ({
  users,
  onSort,
  selectedSort,
  // removeUserHandler,
  onToggleFavorite,
  onRemoveUserHandler
}) => {
  const columns = {
    name: { path: 'name', name: 'Имя' },
    qualities: { name: 'Качества' },
    profession: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (
        <BookMark status={user.bookmark} onToggleFavorite={() => onToggleFavorite(user._id)} />
      )
    },
    delete: {
      component: (user) => (
        <button
          onClick={() => onRemoveUserHandler(user._id)}
          type="button"
          className="btn btn-danger"
        >
          delete
        </button>
      )
    }
  }

  return (
    <table className="table">
      <TableHeader onSort={onSort} selectedSort={selectedSort} columns={columns} />
      <TableBody data={users} columns={columns} />
    </table>
  )
}

UsersTable.propTypes = {
  users: PropType.array.isRequired,
  // removeUserHandler: PropType.func.isRequired,
  onToggleFavorite: PropType.func.isRequired,
  onSort: PropType.func.isRequired,
  onRemoveUserHandler: PropType.func.isRequired,
  selectedSort: PropType.object.isRequired
}

export default UsersTable
