import { useRef } from "react";

function Quote({ quote }) {
  return (
    <div>
      <h1>Quote of the day </h1>
      <div>
        {quote.map((q, i) => (
          <div>
            <h3 key={i}>"{q.q}"</h3>
            <h1 className="line"></h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quote;
