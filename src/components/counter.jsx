import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const zeroPlaceholder = 'Zero!';

  const formCount = () => {
    return count === 0 ? zeroPlaceholder : count;
  };

  const getBadgeClasses = () => {
    let classesForCounter = 'badge m-2 bg-';
    return (classesForCounter += count ? 'primary' : 'danger');
  };

  const handleIncrementClick = () => {
    setCount(count + 1);
  };

  const handleDecrementClick = () => {
    if (!count) {
      return 0;
    }
    setCount(count - 1);
  };

  return (
    <React.Fragment>
      {/* {renderTags()} */}
      <span className={getBadgeClasses()}>{formCount()}</span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={handleIncrementClick}
      >
        Increment
      </button>
      <button
        className="btn btn-secondary btn-sm"
        onClick={handleDecrementClick}
      >
        Decrement
      </button>
    </React.Fragment>
  );
};

export default Counter;
