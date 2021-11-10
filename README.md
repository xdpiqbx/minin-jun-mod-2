# 13. Вызов серверных служб (API), кастомные хуки и управление состоянием

## Цель урока

### Изучим Http сервисы

- Изучим ожидаемые и неожидаемые ошибки Http
- Разберем, какие есть методы для логирования неожидаемых ошибок
- Изучим методы работы с данными на сервере
- Изучим паттерн переиспользуемого Http сервиса и паттрен реализация api через service
- Изучим кастомные хуки
- Содержание урока:

### Http клиенты

- Get, Post, Update, Delete Data
- Обработка ошибок
- Паттерн “Reusable Http Service”
- Паттерн “Reusable logget”
- Отображение оповещений для пользователя
- Кастомные хуки
- Контекст

---

## [Install MongoDB Community Edition on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#install-mongodb-community-edition)

---

## [AXIOS](https://axios-http.com/docs/intro)

```code
npm install axios
```

- get - запрашиваю данные
- post - создаю данные
- put - обновляю данные
- delete - удаляю данные

---

### [React-Toastify](https://www.npmjs.com/package/react-toastify)

![React-Toastify](https://user-images.githubusercontent.com/5574267/130804494-a9d2d69c-f170-4576-b2e1-0bb7f13dd92d.gif)

---

### Context

```jsx
export const QualitiesContext = React.createContext();

<QualitiesContext.Provider value={'Simple text'}>
  ...
</QualitiesContext.Provider>;
```

```jsx
import { QualitiesContext } from '../../App';
const data = useContext(QualitiesContext);
```

```jsx
/// FINAL

import React, { useContext } from 'react';

const QualitiesContext = React.createContext();

export const useQualities = () => {
  return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
  return (
    <QualitiesContext.Provider value={'Simple text'}>
      {children}
    </QualitiesContext.Provider>
  );
};
```

---

## 18. useQualities

```jsx
import React, { useContext, useEffect, useState } from 'react';
import qualityService from '../services/qualityService';

const QualitiesContext = React.createContext();

export const useQualities = () => {
  return useContext(QualitiesContext);
};

export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const getQualities = async () => {
      try {
        const { content } = await qualityService.fetchAll();
        setQualities(content);
        setLoading(false);
      } catch (error) {
        const { message } = error.response.data;
        setError(message);
      }
    };
    getQualities();
  }, []);
  console.log(error);
  return (
    <QualitiesContext.Provider value={{ qualities, isLoading }}>
      {!isLoading ? children : '<h1>Qualities Loading ... </h1>'}
    </QualitiesContext.Provider>
  );
};
```

---

## 19. useQualities обновление данных
