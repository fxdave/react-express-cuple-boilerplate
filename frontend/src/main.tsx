import "./index.css";

import { Boundary, CupleProvider } from "@cuple/react";
import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { store } from "./cuple";

const node = document.getElementById("root");
if (!node) throw new Error("root is not found");
const root = createRoot(node);

root.render(
  <React.StrictMode>
    <CupleProvider store={store}>
      <Boundary
        fallback={<p>Loading...</p>}
        error={(error, retry) => (
          <div>
            <h1>{error.message}</h1>
            <button type="button" onClick={retry}>
              Retry
            </button>
          </div>
        )}
      >
        <App />
      </Boundary>
    </CupleProvider>
  </React.StrictMode>,
);
