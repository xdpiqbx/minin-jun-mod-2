# Модуль 2. Frontend

## 9. Формы. Часть 2

### Fast Company

---

Для клонирования этой ветки

```code
git clone https://github.com/xdpiqbx/minin-jun-mod-2.git -b 009-forms-002 .
```

Тут использовались

```code
npx create-react-app
npm i react-router-dom
npm i bootstrap@5.1.0 -E
npm i lodash@4.17.15
npm i prop-types@15.7.2
npm i -g eslint
npm i react-select
```

## [Lodash](https://lodash.com/)

## [Prop Types](https://www.npmjs.com/package/prop-types)

## [Eslint](https://eslint.org/)

## [React select](https://react-select.com/home#getting-started)

## [Yup](https://www.npmjs.com/package/yup)

```code
eslint --init
```

Import Bootstrap to `index.js` -> `import 'bootstrap/dist/css/bootstrap.css';`

---

## ДЗ шаг за шагом

```code
npm i react-router-dom
```

```jsx
// ---->>> 2. Контролируемые и неконтролируемые компоненты
import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState()
  const handleChange = (event) => {
    setEmail(event.target.value)
  }
  return (
    <form action="">
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
    </form>
  )
}
export default Login
//...
```

```jsx
// ---->>> 3. Обработка значений множества полей
import React, { useState } from 'react'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  return (
    <form action="">
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={data.email} onChange={handleChange} name="email" />
      </div>
      <div>
        <label htmlFor="pwd">Password</label>
        <input type="password" id="pwd" value={data.password} onChange={handleChange} name="pwd" />
      </div>
    </form>
  )
}

export default Login
//...
```
