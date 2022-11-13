import { join } from 'path';

// the app root of my example
export const appRoot = join(__dirname, '../examples/react-ts');

// optmize: pre-bundle dependencies for performance boost
export const cache = join(appRoot, 'src', '.cache');

export const HMR_HEADER = 'vite-hmr';
