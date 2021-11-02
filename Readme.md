# 11. Расширенные хуки и базовая оптимизация

- Помнить о понятии [поверхносной сверки в React](https://github.com/facebook/react/blob/v16.8.6/packages/shared/shallowEqual.js)

## useRef

```jsx
import React, { useRef } from 'react'
const someRef = useRef('someRef')
return <>{someRef.current}</>
```

### RenderCountExample [useRef]

```jsx
import React, { useEffect, useRef, useState } from 'react'
// ...
const RenderCountExample = () => {
  const renderCount = useRef(0)
  const [otherState, setOtherState] = useState(false)
  const toggleOtherState = () => {
    setOtherState(!otherState)
  }
  useEffect(() => {
    renderCount.current++
  })
  return (
    <CardWrapper>
      <SmallTitle>Подсчет количесва рендеров</SmallTitle>
      <p>{renderCount.current}</p>
      <button className="btn btn-primary" onClick={toggleOtherState}>
        Toggle Other State
      </button>
    </CardWrapper>
  )
}

export default RenderCountExample
```

### PrevStateExample [useRef]

```jsx
import React, { useEffect, useRef, useState } from 'react'
// ...
const PrevStateExample = () => {
  const prevState = useRef('')
  const [otherState, setOtherState] = useState('false')

  const toggleOtherState = () => {
    setOtherState((prevState) => (prevState === 'false' ? 'true' : 'false'))
  }

  useEffect(() => {
    prevState.current = otherState
  }, [otherState])

  return (
    <CardWrapper>
      <SmallTitle>Предыдущее состояние</SmallTitle>
      <p>prevState: {prevState.current}</p>
      <p>otherState: {otherState}</p>
      <button className="btn btn-primary" onClick={toggleOtherState}>
        Toggle Other State
      </button>
    </CardWrapper>
  )
}

export default PrevStateExample
```

### ProgrammablActionsExample [useRef]

```jsx
import React, { useRef } from 'react'
const ProgrammablActionsExample = () => {
  const inputRef = useRef()
  const handleClick = () => {
    console.log(inputRef.current)
    console.log(inputRef.current.clientWidth)
    inputRef.current.focus()
  }
  const handleClickWidth = () => {
    inputRef.current.style.width = '200px'
  }
  return (
    <CardWrapper>
      <SmallTitle className="card-title">Программируемые действия и свойства</SmallTitle>
      <Divider />
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input ref={inputRef} type="email" className="form-control" name="email" id="email" />
      <button className="btn btn-primary m-2" onClick={handleClick}>
        Focus input
      </button>
      <button className="btn btn-secondary m-2" onClick={handleClickWidth}>
        Chan width
      </button>
    </CardWrapper>
  )
}

export default ProgrammablActionsExample
```

---

## useMemo - перед вызовом функции проверяется, вызывалась ли функция ранее

- принимает данные и зависимость
- чтоб сохранить данные или результат
- для хранения результатов выполнения сложных функций, (чтоб не вызывать их при каждом рендере)
- использовать только в случае необходимости

```jsx
function runFactorial(n) {
  console.log('runFactorial')
  return n ? n * factorial(n - 1) : 1
}
const fact = useMemo(() => runFactorial(value), [value])
```

---

## useCallback - перед вызовом функции проверяется, вызывалась ли функция ранее

- Аргументы: callBack , [array of dependencies]
- Возвращает: Закэшированное значение выполненной функции, которое обновляется только при изменении зависимостей.

```code
useCallback(fn, deps) ~ useMemo(() => fn, deps)
```

```jsx
const validateWithoutCallback = (data) => {
  console.log(data)
}

const validateWithCallback = useCallback((data) => {
  console.log(data)
}, [])
```

---

## HOC

- Аргументы: callBack , [array of dependencies]
- Возвращает: Закэшированное значение выполненной функции, которое обновляется только при изменении зависимостей.
- Разделяет композицию и использует один и тот же функционал в разных местах
- HOC - функция которая принимает компонент и возвращает или новый компонент или обновлённый компонент
- в HOC заключается логика работы с компонентами
- все HOC начинать с with (withLogin, withPropsStyles)

```jsx
// withLogin
const withLogin = (Component) => (props) => {
  const isLogin = localStorage.getItem('auth')
  return <>{isLogin ? <Component {...props} /> : <SmallTitle>Auth</SmallTitle>}</>
}
```

```jsx
// withPropsStyles
const withPropsStyles = (Component) => (props) => {
  return (
    <CardWrapper>
      <Component {...props} name="New Name" />
    </CardWrapper>
  )
}
```

```jsx
import Component from './someComponent'
import withLogin from './withLogin'
import withPropsStyles from './withPropsStyles'
const HOCExample = () => {
  const ComponentWithAuth = withLogin(Component)
  const ComponentWithPropsStyles = withPropsStyles(Component)
  const NewComponent = withPropsStyles(ComponentWithAuth)
  return (
    <>
      <CardWrapper>
        <SmallTitle>1. Обычный компонент</SmallTitle>
        <Component />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>2. Функциональный HOC</SmallTitle>
        <ComponentWithAuth />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>3. HOC With Styles and Props</SmallTitle>
        <ComponentWithPropsStyles />
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>4. Composed HOC</SmallTitle>
        <NewComponent />
      </CardWrapper>
    </>
  )
}
```

---

## React.Memo

- React.Memo это HOC
- `useMemo` - мемоизирует функции, `React.Memo` - мемоизирует компонент

### Когда использовать `React.Memo`

- Если компонент часто ререндерится
- Если компоненту передаются одинаковые параметры при нескольких ререндерах
- Если компонент не имеет собственного состояния

Внимательно

- React.Memo не будет работать если компонент использует `useState` (если `useState` задан с наружи)
- Функциональный объект равен только самому себе

```jsx
const LogOutBtn = ({ onLogOut }) => {
  useEffect(() => {
    console.log('render LogOutBtn')
  })
  return <button onClick={onLogOut}>Log Out</button>
}
```

```jsx
// const MemoizedLogOutButton = React.memo(LogOutBtn, (prevProps, nextProps) => {
//   if (prevProps !== nextProps) return false
//   return true
// })

function areEqual(prevState, nextState) {
  if (prevState.onLogOut !== nextState.onLogOut) return false
  return true
}

const MemoizedLogOutButton = React.memo(LogOutBtn, areEqual)
```

```jsx
const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false)
  const handleLogOut = useCallback(() => {
    localStorage.removeItem('auth')
  }, [props])

  return (
    <>
      <button onClick={() => setState(!state)}>initiate rerender</button>
      <MemoizedLogOutButton onLogOut={handleLogOut} />
    </>
  )
}
```

---

## React.cloneElement

`React.cloneElement( element, [config], [...children] )`

Клонирует и возвращает новый `React` элемент, используя элемент в качестве отправной точки.

`config` должен содержать все новые пропсы, `key`, а также `ref`.

Полученный элемент будет иметь пропсы исходного элемента, а новые пропсы будут поверхностно слиты воедино.

Новые дочерние элементы заменят существующие.

`key` и `ref` из исходного элемента будут сохранены, если в `config` не было передано `key` и `ref`.

### Когда использовать `React.cloneElement`

- Если невозможно изменить параметры
- Если необходимо изменить или добавить параметры

```jsx
import React from 'react'
import CardWrapper from '../../common/Card'
import TextField from '../../common/form/textField'

import SmallTitle from '../../common/typografy/smallTitle'
const CloneElementExample = () => {
  const field = <TextField label="email" name="email" />
  const handleChange = (target) => {
    console.log('change => ', target)
  }
  return (
    <CardWrapper>
      <SmallTitle>Пример</SmallTitle>
      {field}
      {React.cloneElement(field, { onChange: handleChange, label: 'Cloned Email' })}
    </CardWrapper>
  )
}

export { CloneElementExample }
```

---

## React.Children

`props.children` - это объект, содержащий описание детей. Мы имеем доступ только к чтению.

`React.Children` - это утилита, предоставляемая `React`, которая предоставляет функции для работы с непрозрачной структурой данных `this.props.children`

### `React.children` Functions

- `React.Children.map(children, function[(thisArg)])`

- `React.Children.count(children)`

- `React.Children.toArray(children)`

```jsx
const FormComponent = ({ children }) => {
  const [data, setData] = useState({})

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  return React.Children.map(children, (child) => {
    const config = {
      ...child.props,
      onChange: handleChange,
      value: data[child.props.name] || ''
    }
    return React.cloneElement(child, config)
  })
}
```

```jsx
<FormComponent>
  <TextField name="email" label="Email" />
  <TextField name="password" label="Password" type="password" />
</FormComponent>
```

---

## 9. Создание переиспользуемого компонента формы - DONE

---

## 10 React.memo

Внимательно пересмотреть что передаю в компонент!

Через профайлер пересмотреть что заставляет срабатывать рендер

Настройки профайлера -> `Record why each component rendered while profiling.`

Возможно передаю методы или данные которые постоянно меняются и к ним предварительно нужно применить `useCallback`, `useMemo`

```jsx
import React, { useState } from 'react'
import PropTypes from 'prop-types'
const TextField = ({ label, type, name, value, onChange, error }) => {
  const [data, setData] = useState({})
  // ... Logic
  return ( ... )
}
export default React.memo(TextField)
```

С добавлением `React.memo` структура объекта меняется

```jsx
  const clonedElements = React.Children.map(children, (child) => {
    const childType = typeof child.type
  }
```

теперь `childType` компонента не 'function', а 'object'

P.S. В зависимости добавлять всё что не в зоне видимости функции

## 11. Автофокус поля при открытии формы

```jsx
const handleKeyDown = useCallback((event) => {
  if (event.keyCode === 13) {
    event.preventDefault()
    const form = event.target.form
    const indexField = Array.prototype.indexOf.call(form, event.target)
    form.elements[indexField + 1].focus()
  }
}, [])
```
