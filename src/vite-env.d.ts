/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MOBILE_NUMBER: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  
