import React, { useEffect, useState } from 'react';
import API from '../API';
import MainTable from './MainTable';
import Phrase from './Phrase';
import { generateWords } from '../helpers/helpers';

const Users = () => {
  const [users, setUsers] = useState(API.users.fetchAll());
  const [words, setWords] = useState('человек тусанёт');

  useEffect(() => {
    generateWords(users.length, setWords);
  }, [users.length]);

  const removeUser = (id) => {
    setUsers(users.filter((user) => user._id !== id));
  };

  return (
    <>
      <Phrase number={users.length} words={words} />
      {users.length === 0 ? (
        ''
      ) : (
        <MainTable users={users} removeUserHandler={removeUser} />
      )}
    </>
  );
};

export default Users;
