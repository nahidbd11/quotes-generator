const Quotes = ({ handleClick, quoteText, author }) => {
  return (
    <div className="quotes-container">
      <cite>
        <blockquote className="mt-2"> {quoteText}</blockquote>
      </cite>
      <p className="text-muted mt-2">---------{author}</p>
      <button className="btn btn-primary mt-1" onClick={handleClick}>
        Generate Quotes
      </button>
    </div>
  );
};

export default Quotes;
