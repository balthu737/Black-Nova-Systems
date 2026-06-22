import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';

const stored = browser ? localStorage.getItem('bns_user') : null;

export const user = writable(stored ? JSON.parse(stored) : null);

// Persistir en localStorage cada vez que cambia
if (browser) {
  user.subscribe(($user) => {
    if ($user) {
      localStorage.setItem('bns_user', JSON.stringify($user));
    } else {
      localStorage.removeItem('bns_user');
    }
  });
}

// Store derivado: true si hay sesión activa
export const isLoggedIn = derived(user, ($user) => !!$user);

// ─── Acciones ────────────────────────────────────────────────────────────────

/**
 * Llama a tu API de login.
 * Ajustá la URL y el formato de respuesta según tu backend.
 * Se espera que el endpoint devuelva: { token, user: { id, name, email } }
 */
export async function login(email, password) {
  const res = await fetch('/routes/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Credenciales incorrectas');
  }

  const data = await res.json();

  // Guardá el token si tu API lo devuelve
  if (browser && data.token) {
    localStorage.setItem('bns_token', data.token);
  }

  user.set(data.user);
  return data.user;
}

/**
 * Llama a tu API de registro.
 * Se espera que el endpoint devuelva: { token, user: { id, name, email } }
 */
export async function register(name, email, password) {
  const res = await fetch('/routes/auth/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || 'Error al crear la cuenta');
  }

  const data = await res.json();

  if (browser && data.token) {
    localStorage.setItem('bns_token', data.token);
  }

  user.set(data.user);
  return data.user;
}

/**
 * Cierra sesión localmente y opcionalmente llama al endpoint de logout.
 */
export async function logout() {
  const token = browser ? localStorage.getItem('bns_token') : null;

  // Intentar invalidar token en el servidor (opcional, ignorar error)
  if (token) {
    fetch('/api/auth/logout', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    }).catch(() => {});
  }

  if (  browser) localStorage.removeItem('bns_token');
  user.set(null);
}     