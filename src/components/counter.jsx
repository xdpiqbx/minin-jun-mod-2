import React from 'react';

const Counter = ({
  id,
  cValue,
  name,
  onDelete,
  onIncrement,
  onDecrement,
  // children,
}) => {
  const zeroPlaceholder = 'Zero!';

  const formCount = () => {
    return cValue === 0 ? zeroPlaceholder : cValue;
  };

  const getBadgeClasses = () => {
    let classesForCounter = 'badge m-2 bg-';
    return (classesForCounter += cValue ? 'primary' : 'danger');
  };

  const handleDelete = (counterId) => {
    onDelete(counterId);
  };

  const handleIncrent = () => {
    onIncrement(id, cValue);
  };
  const handleDecrement = () => {
    onDecrement(id, cValue);
  };

  return (
    <div>
      <h4>{name}</h4>
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button className="btn btn-secondary btn-sm" onClick={handleIncrent}>
        Increment
      </button>
      <button className="btn btn-secondary btn-sm" onClick={handleDecrement}>
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
