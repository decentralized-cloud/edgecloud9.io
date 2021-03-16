interface GlobalConfig {}

declare global {
  interface Window {
    _env_: GlobalConfig;
  }
}

export {};
