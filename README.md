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
