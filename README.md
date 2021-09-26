# Модуль 2. Frontend

## 8. Маршрутизация

### Fast Company

---

Для клонирования этой ветки

```code
git clone https://github.com/xdpiqbx/minin-jun-mod-2.git -b 008-routes .
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
// ---->>> index.js
//...
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  document.getElementById('root')
)
```
