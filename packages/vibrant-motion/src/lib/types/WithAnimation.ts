import type { Animation } from './Animation';

export type WithTransition<Style> = { [key in keyof Style]?: Animation<Style[key]> };
