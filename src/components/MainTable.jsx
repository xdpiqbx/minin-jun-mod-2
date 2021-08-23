const MainTable = ({ users, removeUserHandler }) => {
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
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>
              {user.qualities.map((qual) => (
                <span key={qual.name} className={`badge bg-${qual.color} m-1`}>
                  {qual.name}
                </span>
              ))}
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}/5</td>
            <td>
              <button
                onClick={() => removeUserHandler(user._id)}
                type="button"
                className="btn btn-danger"
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainTable;
