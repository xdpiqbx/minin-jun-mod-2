import React, { useEffect, useState } from 'react';
import API from './API';
import Users from './components/Users';
import Phrase from './components/Phrase';
import { generateWords } from './helpers/helpers';

const App = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const [words, setWords] = useState('человек тусанёт');

  useEffect(() => {
    generateWords(users.length, setWords);
  }, [users.length]);

  const removeUser = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  const toggleFavorite = (userId) => {
    setUsers(
      users.filter((user) => {
        if (user._id === userId) {
          user.isFavorite = !user.isFavorite;
          return user;
        }
        return user;
      })
    );
  };

  return (
    <>
      <Phrase number={users.length} words={words} />
      {users.length === 0 ? (
        ''
      ) : (
        <Users
          users={users}
          removeUserHandler={removeUser}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </>
  );
};

export default App;
