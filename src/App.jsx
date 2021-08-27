import React, { useState } from 'react';
import Counters from '../src/components/counters';
import NavBar from '../src/components/navBar';

function App() {
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

  const handleIncrement = (counterId, value) => {
    const newCounters = [...counters];
    const index = newCounters.findIndex((el) => el.id === counterId);
    newCounters[index].value = value + 1;
    setCounters(newCounters);
  };
  const handleDecrement = (counterId, value) => {
    const newCounters = [...counters];
    const index = newCounters.findIndex((el) => el.id === counterId);
    newCounters[index].value = value <= 0 ? (value = 0) : (value -= 1);
    setCounters(newCounters);
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar
          totalItems={counters.reduce((acc, count) => acc + count.value, 0)}
        />
        <Counters
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
