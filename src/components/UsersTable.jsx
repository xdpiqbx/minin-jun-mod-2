import React from 'react'
import { Link } from 'react-router-dom'
import PropType from 'prop-types'
import Table from './Table'
import BookMark from './BookMark'
import QualitiesList from './QualitiesList'

const UsersTable = ({ users, onSort, selectedSort, onToggleBookmark, onDelete }) => {
  const columns = {
    name: {
      path: 'name',
      name: 'Имя',
      component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>
    },
    qualities: {
      name: 'Качества',
      component: (user) => <QualitiesList qualities={user.qualities} />
    },
    profession: { path: 'profession.name', name: 'Профессия' },
    completedMeetings: { path: 'completedMeetings', name: 'Встретился, раз' },
    rate: { path: 'rate', name: 'Оценка' },
    bookmark: {
      path: 'bookmark',
      name: 'Избранное',
      component: (user) => (
        <BookMark status={user.bookmark} toggleBookmarkAction={() => onToggleBookmark(user._id)} />
      )
    },
    delete: {
      component: (user) => (
        <button onClick={() => onDelete(user._id)} type="button" className="btn btn-danger">
          delete
        </button>
      )
    }
  }

  return <Table data={users} onSort={onSort} selectedSort={selectedSort} columns={columns} />
}

UsersTable.propTypes = {
  users: PropType.array.isRequired,
  onToggleBookmark: PropType.func,
  onSort: PropType.func.isRequired,
  onDelete: PropType.func,
  selectedSort: PropType.object.isRequired
}

export default UsersTable
