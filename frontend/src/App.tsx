import { useState } from 'react';

import { client } from './cuple';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  async function sendWelcomeRequest() {
    const response = await client.sayHi.get({ query: { name } });
    setMessage(response.message);
  }

  return (
    <div>
      <h1>{message}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <button onClick={sendWelcomeRequest}>Welcome</button>
    </div>
  );
}

export default App;
