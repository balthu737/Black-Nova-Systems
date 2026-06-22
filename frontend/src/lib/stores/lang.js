import { writable, derived } from 'svelte/store';
import { i18n } from '$lib/data/content.js';

export const lang = writable('es');

export const t = derived(lang, ($lang) => i18n[$lang]);