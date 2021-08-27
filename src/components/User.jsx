import { useState } from 'react';
import BookMark from './BookMark';
import QualitieBadge from './QualitieBadge';

const User = ({ user, onRemoveUserHandler }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
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
        <BookMark isFavorite={isFavorite} onToggleFavorite={toggleFavorite} />
      </td>
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
