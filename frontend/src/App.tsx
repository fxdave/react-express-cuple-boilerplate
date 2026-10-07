import { useGetWrapped } from "@cuple/react";
import { useState } from "react";

import { client } from "./cuple";

function App() {
  const [name, setName] = useState("");
  const sayHi = useGetWrapped(
    client.sayHi.get,
    { query: { name } },
    {
      resolveAlso: ["invalid-query"],
      config: {
        loading: {
          debounceMs: 100,
        },
        cache: {
          enabled: false,
        },
      },
    },
  );

  const message =
    sayHi.data.result === "invalid-query"
      ? sayHi.data.issues?.[0]?.message
      : sayHi.data.message;

  return (
    <>
      <h1>{message}</h1>
      <input
        className={sayHi.isPending ? "loading" : ""}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type your nickname here"
      />
    </>
  );
}

export default App;
