import { useState } from "react";

export default function App() {
  const [parentState, setParentState] = useState(0);

  const items = ["A", "B", "C", "D"];
  let a =0
  return (
    <div>
      <button onClick={() => setParentState(s => s + 1)}>
        Re-render parent
      </button>

      {items.map(item => {
        const randomKey = a++;
        console.log(`Generated key for ${item}:`, randomKey);

        return <Item key={randomKey} label={item} />;
      })}
    </div>
  );
}

function Item({ label }) {
  const [count, setCount] = useState(0);

  console.log(`Item ${label} rendered`);

  return (
    <div onClick={() => setCount(c => c + 1)}>
      {label} - {count}
    </div>
  );
}
