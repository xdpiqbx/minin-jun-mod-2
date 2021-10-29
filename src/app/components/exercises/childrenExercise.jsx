import React from 'react'
import PropTypes from 'prop-types'
import CollapseWrapper from '../common/collapse'

const ListComponent = ({ children }) => {
  let num = 0
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, { value: (num += 1) })
  })
}

ListComponent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить порядковый номер,
        относительно того, как они располагаются на странице. Вы можете использовать как{' '}
        <code>React.Children.map</code> так и <code>React.Children.toArray</code>
      </p>
      <ListComponent>
        <Component />
        <Component />
        <Component />
      </ListComponent>
    </CollapseWrapper>
  )
}

const Component = ({ value }) => {
  return <div>{value} Компонент списка</div>
}

Component.propTypes = {
  value: PropTypes.number
}

export default ChildrenExercise
