// index.d.cts
import { Window } from './index.js';

declare const getWindows: () => Promise<Window[]>;
export = getWindows;