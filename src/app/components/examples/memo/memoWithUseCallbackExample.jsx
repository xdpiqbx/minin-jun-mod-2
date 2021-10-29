import React, { useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const LogOutBtn = ({ onLogOut }) => {
  useEffect(() => {
    console.log('render LogOutBtn')
  })
  return (
    <button className="btn btn-primary m-2" onClick={onLogOut}>
      Log Out
    </button>
  )
}

LogOutBtn.propTypes = {
  onLogOut: PropTypes.func
}

// не обязательно но можно описать свою фкнкцию поверхносной сверки и передать в React.memo
// areEqual

// const MemoizedLogOutButton = React.memo(LogOutBtn, (prevProps, nextProps) => {
//   if (prevProps !== nextProps) return false
//   return true
// })

function areEqual(prevState, nextState) {
  if (prevState.onLogOut !== nextState.onLogOut) return false
  return true
}

const MemoizedLogOutButton = React.memo(LogOutBtn, areEqual)

const MemoWithUseCallbackExample = (props) => {
  const [state, setState] = useState(false)
  const handleLogOut = useCallback(() => {
    localStorage.removeItem('auth')
  }, [props])

  return (
    <>
      <button className="btn btn-primary m-2" onClick={() => setState(!state)}>
        initiate rerender
      </button>
      <MemoizedLogOutButton onLogOut={handleLogOut} />
    </>
  )
}

export default MemoWithUseCallbackExample
