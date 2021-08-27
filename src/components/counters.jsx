import React from 'react';
import Counter from './counter';

const Counters = ({
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
  counters,
}) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map(({ id, value, name }) => (
        <Counter
          key={id}
          id={id}
          cValue={value}
          name={name}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
