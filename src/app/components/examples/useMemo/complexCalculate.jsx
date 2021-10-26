import React, { useEffect, useState } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'

function factorial(n) {
  return n ? n * factorial(n - 1) : 1
}

function runFactorial(n) {
  console.log('runFactorial')
  return factorial(n)
}

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100)
  const [otherValue, setOtherValue] = useState(false)
  const btnColor = otherValue ? 'primary' : 'secondary'
  useEffect(() => {
    console.log('render')
  })
  const fact = runFactorial(value)
  return (
    <>
      <CardWrapper>
        <SmallTitle>Кэширование сложных вычислений</SmallTitle>
        <p>
          Factorial {value} is {fact}
        </p>
        <button
          className="btn btn-primary ms-md-2"
          onClick={() => {
            setValue((prev) => prev + 10)
          }}
        >
          Increment
        </button>
        <button
          className="btn btn-primary ms-md-2"
          onClick={() => {
            setValue((prev) => prev - 10)
          }}
        >
          Decrement
        </button>
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>Зависимость от сторонних setState</SmallTitle>
        <button
          className={'btn ms-md-2 btn-' + btnColor}
          onClick={() => {
            setOtherValue((prev) => !prev)
          }}
        >
          Change me
        </button>
      </CardWrapper>
    </>
  )
}

export default ComplexCalculateExample
