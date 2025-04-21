/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_MOBILE_NUMBER: string;
    readonly VITE_PAYSTACK_KEY:string
    readonly VITE_PUBLIC_PAYSTACK_KEY: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  
