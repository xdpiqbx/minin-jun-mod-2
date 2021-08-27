const BookMark = ({ isFavorite, onToggleFavorite }) => {
  const iconYes = 'bi bi-hand-thumbs-up-fill';
  const iconNo = 'bi bi-hand-thumbs-down';
  return (
    <button onClick={onToggleFavorite}>
      <i className={isFavorite ? iconYes : iconNo} />
    </button>
  );
};

export default BookMark;
