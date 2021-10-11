# Модуль 2. Frontend

## 9. Формы. Часть 1

### Fast Company

---

Для клонирования этой ветки

```code
git clone https://github.com/xdpiqbx/minin-jun-mod-2.git -b 009-forms-001 .
```

Тут использовались

```code
npx create-react-app
npm i react-router-dom
npm i bootstrap@5.1.0 -E
npm i lodash@4.17.15
npm i prop-types@15.7.2
npm i -g eslint
```

## [Lodash](https://lodash.com/)

## [Prop Types](https://www.npmjs.com/package/prop-types)

## [Eslint](https://eslint.org/)

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
