import User from './User';
const Users = ({ users, removeUserHandler }) => {
  return (
    <table className="table">
      <thead>
        <tr key={'user._id'}>
          <th scope="col">Имя</th>
          <th scope="col">Качества</th>
          <th scope="col">Профессия</th>
          <th scope="col">Встретился, раз</th>
          <th scope="col">Оценква</th>
          <th scope="col">&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User
            key={user._id}
            user={user}
            onRemoveUserHandler={removeUserHandler}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Users;
