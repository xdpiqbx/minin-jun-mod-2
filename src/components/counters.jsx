import React, { useState } from 'react';
import Counter from './counter';

const Counters = () => {
  const initialState = [
    { id: 0, value: 0, name: 'Ложка' },
    { id: 1, value: 0, name: 'Вилка' },
    { id: 2, value: 0, name: 'Тарелка' },
    { id: 3, value: 0, name: 'Стартовый набор минималиста' },
    { id: 4, value: 0, name: 'Ненужные вещи' },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };

  const handleIncrement = (counterId) => {
    setCounters(
      counters.map((c) => {
        if (c.id === counterId) {
          c.value += 1;
        }
        return c;
      })
    );
  };
  const handleDecrement = (counterId) => {
    setCounters(
      counters.map((c) => {
        if (c.id === counterId) {
          c.value -= 1;
        }
        return c;
      })
    );
  };

  const handleReset = () => {
    setCounters(initialState);
  };
  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Сброс
      </button>
      {counters.map(({ id, value, name }) => (
        <Counter
          key={id}
          id={id}
          cValue={value}
          name={name}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
};

export default Counters;
