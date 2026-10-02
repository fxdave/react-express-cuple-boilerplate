import { fetchCuple } from "@cuple/client";
import { useAction } from "@cuple/react";
import { useState } from "react";

import { client } from "./cuple";

function App() {
  const [name, setName] = useState("");

  const sayHi = useAction((nickname: string) =>
    fetchCuple(client.sayHi.get, {
      query: { name: nickname },
    }).thenResolveAlso(["validation-error"]),
  );

  const message =
    sayHi.value?.result === "validation-error"
      ? sayHi.value.issues?.[0]?.message
      : sayHi.value?.message;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        sayHi.run(name);
      }}
    >
      <h1>{message}</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your nickname here"
      />
      <button type="submit" disabled={sayHi.isPending}>
        Welcome
      </button>
    </form>
  );
}

export default App;
