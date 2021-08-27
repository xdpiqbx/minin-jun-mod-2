import QualitieBadge from './QualitieBadge';

const User = ({ user, onRemoveUserHandler }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((quality) => (
          <QualitieBadge key={quality.name} quality={quality} />
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate}/5</td>
      <td>
        <button
          onClick={() => onRemoveUserHandler(user._id)}
          type="button"
          className="btn btn-danger"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
