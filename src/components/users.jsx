import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import User from './User';

const Users = ({ users, removeUserHandler, onToggleFavorite }) => {
  const usersPerPage = 4;

  const [currentPage, setCurrentPage] = useState(1);
  const [slicedUsers, setSlicedUsers] = useState([]);

  useEffect(() => {
    cropUsersPerPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users.length]);

  useEffect(() => {
    if (slicedUsers.length % usersPerPage === 0) {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slicedUsers.length]);

  const cropUsersPerPage = () => {
    let start = usersPerPage * (currentPage - 1);
    setSlicedUsers(users.slice(start, start + usersPerPage));
  };

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
          {slicedUsers.map((user) => (
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
        contentLength={users.length}
        usersPerPage={usersPerPage}
        currentPage={currentPage}
        setPage={setCurrentPage}
        cropUsersPerPage={cropUsersPerPage}
      />
    </>
  );
};

export default Users;
