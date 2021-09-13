import React from 'react';
import PropType from 'prop-types';

const BookMark = ({ isFavorite, onToggleFavorite }) => {
  const iconYes = 'bi bi-hand-thumbs-up-fill';
  const iconNo = 'bi bi-hand-thumbs-down';
  return (
    <button onClick={onToggleFavorite}>
      <i className={isFavorite ? iconYes : iconNo} />
    </button>
  );
};

BookMark.propTypes = {
  isFavorite: PropType.bool.isRequired,
  onToggleFavorite: PropType.func.isRequired
};

export default BookMark;
