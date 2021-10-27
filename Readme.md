# 11. Расширенные хуки и базовая оптимизация

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
