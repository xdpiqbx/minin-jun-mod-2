import React, { useState, useEffect } from 'react'
import PropType from 'prop-types'
import Phrase from './Phrase'
import User from './User'
import Pagination from './Pagination'
import { paginate } from '../utils/paginate'
import GroupList from './GroupList'
import { generateWords } from '../helpers/helpers'
import API from '../API'

const Users = ({ users: allUsers, removeUserHandler, onToggleFavorite }) => {
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [words, setWords] = useState('человек тусанёт')

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data))
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])
  useEffect(() => {
    generateWords(allUsers.length, setWords)
  }, [allUsers.length])
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }
  const filteredUsers = selectedProf
    ? allUsers.filter((user) => user.profession === selectedProf)
    : allUsers
  const count = filteredUsers.length
  const users = paginate(filteredUsers, currentPage, pageSize)
  const clearFilter = () => {
    setSelectedProf(undefined)
  }
  return (
    <div className="d-flex">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            items={professions}
            onItemSelect={handleProfessionSelect}
            selectedItem={selectedProf}
            // defaultProps
            // valProp="_id"
            // contentProp="name"
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilter}>
            Очистить фильтр
          </button>
        </div>
      )}
      <div className="d-flex flex-column">
        <Phrase number={count} words={words} />
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
        <div className="d-flex justify-content-center">
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

Users.propTypes = {
  users: PropType.array.isRequired,
  removeUserHandler: PropType.func.isRequired,
  onToggleFavorite: PropType.func.isRequired
}

export default Users
