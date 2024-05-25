/// <reference types="vite/client" />

type ImportMetaEnv = {
  API_URL?: string;
};

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
