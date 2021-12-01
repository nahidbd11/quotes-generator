const Quotes = ({ handleClick, quoteText, author }) => {
  return (
    <div className="contaier">
      <button className="btn btn-primary" onClick={handleClick}>
        Generate Quotes
      </button>
      <p className="text-muted">{quoteText}</p>
      <cite>
        <blockquote> {author}</blockquote>
      </cite>
    </div>
  );
};

export default Quotes;
