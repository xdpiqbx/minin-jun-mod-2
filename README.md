# 14. Firebase и трансформеры данных

## 2. Создание Базы данных в Firebase

```json
{
  "profession": {
    "67rdca3eeb7f6fgeed471818": {
      "_id": "67rdca3eeb7f6fgeed471818",
      "name": "Доктор"
    }
  },
  "quality": {
    "67rdca3eeb7f6fgeed471100": {
      "_id": "67rdca3eeb7f6fgeed471100",
      "color": "secondary",
      "name": "Странный"
    },
    "67rdca3eeb7f6fgeed471102": {
      "_id": "67rdca3eeb7f6fgeed471102",
      "color": "info",
      "name": "Красавчик"
    },
    "67rdca3eeb7f6fgeed471198": {
      "_id": "67rdca3eeb7f6fgeed471198",
      "color": "primary",
      "name": "Нудила"
    }
  },
  "user": {
    "67rdca3eeb7f6fgeed471815": {
      "_id": "67rdca3eeb7f6fgeed471815",
      "completedMeetings": 36,
      "email": "Jony7351@tw.com",
      "name": "Джон Дориан",
      "password": "b2C!9bmE",
      "profession": "67rdca3eeb7f6fgeed471818",
      "qualities": [
        "67rdca3eeb7f6fgeed471198",
        "67rdca3eeb7f6fgeed471102",
        "67rdca3eeb7f6fgeed471100"
      ],
      "rate": 2.5
    }
  }
}
```

## 3. Запросы Firebase

### [Firebase Database REST API](https://firebase.google.com/docs/reference/rest/database)

#### GET - Reading Data

```url
    https://fast-company-wdpiqbw-default-rtdb.europe-west1.firebasedatabase.app/profession.json
    https://fast-company-wdpiqbw-default-rtdb.europe-west1.firebasedatabase.app/user.json
    https://fast-company-wdpiqbw-default-rtdb.europe-west1.firebasedatabase.app/user/67rdca3eeb7f6fgeed471815/name.json
```

#### PUT - Writing Data

#### POST - Pushing Data

#### PATCH - Updating Data

#### DELETE - Removing Data

## 4. Axios intercepters. Request. Модификация URL

```json
{
  "apiEndPoint": "http://localhost:4000/api/v1/"
}
```

```json
{
  "apiEndPoint": "https://fast-company-wdpiqbw-default-rtdb.europe-west1.firebasedatabase.app/",
  "isFirebase": true
}
```

[Axios interceptors](https://axios-http.com/docs/interceptors)

```js
axios.interceptors.request.use(
  (config) => {
    if (configFile.isFirebase) {
      const containSlash = /\/$/gi.test(config.url);
      config.url =
        (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
      console.log(config.url);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

## 5. Axios intercepters. Response. Трансформация данных

```js
const transformData = (data) => {
  return data
    ? Object.keys(data).map((key) => ({
        ...data[key]
      }))
    : [];
};
axios.interceptors.response.use(
  (res) => {
    if (configFile.isFirebase) {
      res.data = { content: transformData(res.data) };
      console.log(res.data);
    }
    return res;
  },
  (error) => {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    if (!expectedErrors) {
      console.log(error);
      toast.error("Something went wrong. Try again later");
    }
    return Promise.reject(error);
  }
);
```

## 6. Инициализация Mock данных

```jsx
// import React, { useContext, useEffect, useState } from "react";
import { useState } from "react";
import professions from "../mockData/professions.json";
// import qualities from "../mockData/qualities.json";
// import users from "../mockData/users.json";
import httpService from "../services/httpService";

const useMockData = () => {
  // const statusConst = {
  //   idle: "Not Started",
  //   pending: "In Process",
  //   successed: "Ready",
  //   error: "Error Occured"
  // };
  const [error, setError] = useState(null);
  // const [status, setStatus] = useState(statusConst.idle);

  async function initialize() {
    try {
      for (const prof of professions) {
        await httpService.put("profession/" + prof._id, prof);
      }
    } catch (error) {
      setError(error);
    }
  }
  return { error, initialize };
};

export default useMockData;
```

9:30
