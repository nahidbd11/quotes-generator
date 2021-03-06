import { forwardRef, useImperativeHandle, useRef } from "react";

const Quotes = ({ handleClick, quoteText, author, isloading }, ref) => {
  const localRef = useRef();
  useImperativeHandle(ref, () => ({
    slideDown() {
      localRef.current.classList.add("hide");
    },
  }));
  return (
    <div className="quotes-container">
      <div className={`quote-div ${isloading ? "" : ""}`} ref={localRef}>
        <cite>
          <blockquote className="mt-2"> {quoteText}</blockquote>
        </cite>
        <p className="text-muted mt-2">---------{author}</p>
      </div>
      <button className="btn btn-primary mt-1" onClick={handleClick}>
        Generate Quotes
      </button>
    </div>
  );
};

export default forwardRef(Quotes);
