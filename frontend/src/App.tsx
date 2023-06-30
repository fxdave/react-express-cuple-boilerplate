import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <button onClick={() => setCount((count) => count + 1)}>+</button>
    </div>
  );
}

export default App;
