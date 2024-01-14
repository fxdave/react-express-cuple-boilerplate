import { useState } from 'react';

import { client } from './cuple';

function App() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  async function sendWelcomeRequest() {
    const result = await client.sayHi.get({
      query: { name },
    });
    setMessage(result.message);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sendWelcomeRequest();
      }}
    >
      <h1>{message}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your nickname here"
      />
      <button>Welcome</button>
    </form>
  );
}

export default App;
