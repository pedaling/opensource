window.process = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  env: { STORYBOOK_NATIVE_LOCAL_EMULATOR: (import.meta as any).env.STORYBOOK_NATIVE_LOCAL_EMULATOR },
} as any;
