const Quotes = ({ handleClick, quoteText, author }) => {
  return (
    <div className="contaier">
      <p className="text-muted">{quoteText}</p>
      <cite>
        <blockquote> {author}</blockquote>
      </cite>{" "}
      <button className="btn btn-primary" onClick={handleClick}>
        Generate Quotes
      </button>
    </div>
  );
};

export default Quotes;
