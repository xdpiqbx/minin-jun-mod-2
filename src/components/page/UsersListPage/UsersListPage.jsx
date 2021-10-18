import React, { useState, useEffect } from 'react'
import PropType from 'prop-types'
import _ from 'lodash'
import Phrase from '../../Phrase'
import UsersTable from '../../ui/UsersTable'
import GroupList from '../../common/GroupList'
import Pagination from '../../common/Pagination'
import { paginate } from '../../../utils/paginate'
import { generateWords } from '../../../helpers/helpers'
import API from '../../../API'

const UsersListPage = () => {
  const pageSize = 8
  const [allUsers, setAllUsers] = useState()
  const [allUsersLength, setAllUsersLength] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [words, setWords] = useState('человек тусанёт')
  const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    API.users.fetchAll().then((data) => {
      setAllUsersLength(data.length)
      return setAllUsers(data)
    })
  }, [])

  useEffect(() => {
    API.professions.fetchAll().then((data) => setProfessions(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf, searchQuery])

  useEffect(() => {
    generateWords(allUsersLength, setWords)
  }, [allUsersLength])

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleSort = (item) => {
    setSortBy(item)
  }

  const handleProfessionSelect = (item) => {
    if (searchQuery !== '') {
      setSearchQuery('')
    }
    setSelectedProf(item)
  }
  const handleSearchQuery = ({ target }) => {
    setSelectedProf(null)
    setSearchQuery(target.value)
  }

  const handleDelete = (id) => {
    setAllUsers(allUsers.filter((user) => user._id !== id))
  }

  const handleToggleBookmark = (userId) => {
    setAllUsers(
      allUsers.filter((user) => {
        if (user._id === userId) {
          user.bookmark = !user.bookmark
          return user
        }
        return user
      })
    )
  }

  if (!allUsers) {
    return 'loading'
  }

  if (allUsers) {
    const filteredUsers = searchQuery
      ? allUsers.filter((user) => user.name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1)
      : selectedProf
      ? allUsers.filter((user) => JSON.stringify(user.profession) === JSON.stringify(selectedProf))
      : allUsers
    const count = filteredUsers.length
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.path], [sortBy.order])
    const usersCrop = paginate(sortedUsers, currentPage, pageSize)
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
          <input
            type="text"
            name="searchQuery"
            placeholder="Search..."
            onChange={handleSearchQuery}
            value={searchQuery}
          />
          <UsersTable
            users={usersCrop}
            onDelete={handleDelete}
            onToggleBookmark={handleToggleBookmark}
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
}

UsersListPage.propTypes = {
  users: PropType.array,
  onRemoveUserHandler: PropType.func,
  onToggleFavorite: PropType.func
}

export default UsersListPage
