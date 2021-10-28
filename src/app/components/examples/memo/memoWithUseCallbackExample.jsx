import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

const LogOutBtn = ({ onLogOut }) => {
  useEffect(() => {
    console.log('render LogOutBtn')
  })

  return (
    <button className="btn btn-primary" onClick={onLogOut}>
      LogOutBtn
    </button>
  )
}

LogOutBtn.propTypes = {
  onLogOut: PropTypes.func
}

const MemoWithUseCallbackExample = (props) => {
  const handleLogOut = () => {
    localStorage.removeItem('auth')
  }
  return <LogOutBtn onLogOut={handleLogOut} />
}

export default MemoWithUseCallbackExample
