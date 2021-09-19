import React, { useState, useEffect } from 'react'
import PropType from 'prop-types'
import _ from 'lodash'
import Phrase from './Phrase'
import UsersTable from './UsersTable'
import GroupList from './GroupList'
import Pagination from './Pagination'
import { paginate } from '../utils/paginate'
import { generateWords } from '../helpers/helpers'
import API from '../API'

const Users = ({ users: allUsers, removeUserHandler, onToggleFavorite }) => {
  const pageSize = 8
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [words, setWords] = useState('человек тусанёт')
  const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' })

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

  const handleSort = (item) => {
    setSortBy(item)
  }

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }

  const filterObjectsAndArrays = (allUsers) => {
    return allUsers.filter(
      (user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf)
    )
  }

  const filteredUsers = selectedProf ? filterObjectsAndArrays(allUsers) : allUsers

  const count = filteredUsers.length

  const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order])

  const users = paginate(sortedUsers, currentPage, pageSize)
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
        <UsersTable
          users={users}
          removeUserHandler={removeUserHandler}
          onToggleFavorite={onToggleFavorite}
          onSort={handleSort}
          selectedSort={sortBy}
        />
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
