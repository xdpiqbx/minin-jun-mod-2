import React, { useRef } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'
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
        Changr width
      </button>
    </CardWrapper>
  )
}

export default ProgrammablActionsExample
