# 013-fast-company

## useUsers hook

```jsx
// === >>> useUsers.jsx

import React, { useContext } from "react";
import PropTypes from "prop-types";

const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
};

const UserProvider = ({ children }) => {
    return <UserContext.Provider>{children}</UserContext.Provider>;
};

UserProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default UserProvider;
```

```jsx
// === >>> users.jsx

import React from "react";
// ...
import UserProvider from "../hooks/useUsers";
const Users = () => {
    // ...
    return <UserProvider>...</UserProvider>;
};

export default Users;
```

---

## 26. User Service

```js
import httpService from "./httpService";
const userEndpoint = "user/";
const userService = {
    get: async () => {
        const { data } = await httpService.get(userEndpoint);
        return data;
    }
};
export default userService;
```

```jsx
// === >>> useUsers.jsx

import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import userService from "../services/userService";
import { toast } from "react-toastify";

const UserContext = React.createContext();

export const useUser = () => {
    return useContext(UserContext);
};

const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    async function getUsers() {
        try {
            const { content } = await userService.get();
            setUsers(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
        setLoading(false);
    }

    return (
        <UserContext.Provider value={{ users }}>
            {!isLoading ? children : "Loading..."}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ])
};

export default UserProvider;
```

---

## 27. useProfessions

```jsx
// professionService.js
import httpService from "./httpService";
const professionEndpoint = "profession/";
const professionService = {
    get: async () => {
        const { data } = await httpService.get(professionEndpoint);
        return data;
    }
};
export default professionService;
```

---

29.Решение useQualities

2:30
