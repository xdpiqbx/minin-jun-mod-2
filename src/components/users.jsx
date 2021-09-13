import React, { useState } from 'react';
import PropType from 'prop-types';
import User from './User';
import Pagination from './Pagination';
import { paginate } from '../utils/paginate';
const Users = ({ users: allUsers, removeUserHandler, onToggleFavorite }) => {
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageIndex) => {
    console.log('page: ', pageIndex);
    setCurrentPage(pageIndex);
  };
  const users = paginate(allUsers, currentPage, pageSize);
  return (
    <>
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
  );
};

Users.propTypes = {
  users: PropType.array.isRequired,
  removeUserHandler: PropType.func.isRequired,
  onToggleFavorite: PropType.func.isRequired
};

export default Users;
