const Phrase = ({ number, words }) => {
  return number === 0 ? (
    <h1>
      <span className="badge bg-danger">Никто с тобой не тусанёт</span>
    </h1>
  ) : (
    <h1>
      <span className="badge bg-primary">
        {number} {words} с тобой сегодня
      </span>
    </h1>
  );
};

export default Phrase;
