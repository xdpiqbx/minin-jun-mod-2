import React, { useState, useEffect } from 'react'
import PropType from 'prop-types'
import User from './User'
import Pagination from './Pagination'
import { paginate } from '../utils/paginate'
import GroupList from './GroupList'
import API from '../API'
const Users = ({ users: allUsers, removeUserHandler, onToggleFavorite }) => {
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data))
  }, [])
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const users = paginate(allUsers, currentPage, pageSize)
  const handleItemSelect = (params) => {
    console.log(params)
  }
  return (
    <>
      {professions && (
        <GroupList
          items={professions}
          onItemSelect={handleItemSelect}
          valProp="_id"
          contentProp="name"
        />
      )}
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
      <Pagination
        itemsCount={allUsers.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

Users.propTypes = {
  users: PropType.array.isRequired,
  removeUserHandler: PropType.func.isRequired,
  onToggleFavorite: PropType.func.isRequired
}

export default Users
