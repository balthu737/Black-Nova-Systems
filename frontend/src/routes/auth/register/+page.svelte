<script>
  import { goto } from '$app/navigation';
  import { register } from '$lib/stores/auth.js';

  let name = $state('');
  let email = $state('');
  let password = $state('');
  let loading = $state(false);
  let error = $state('');

  let passwordWeak = $derived(password.length > 0 && password.length < 8);
  let canSubmit = $derived(!!name && !!email && password.length >= 8 && !loading);

  async function handleRegister() {
    error = '';
    loading = true;
    try {
      await register(name, email, password);
      goto('/dashboard');
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  }

  function handleKeydown(e) {
    if (e.key === 'Enter' && canSubmit) handleRegister();
  }
</script>

<div class="page">
  <div class="card">
    <a href="/" class="logo">
      <span class="logo-dot"></span>
      <span class="logo-text">Black Nova Systems</span>
    </a>

    <h1>Crear una cuenta</h1>
    <p class="subtitle">Completá tus datos para comenzar</p>

    {#if error}
      <div class="alert">⚠ {error}</div>
    {/if}

    <div class="form">
      <div class="field">
        <label for="name">Nombre completo</label>
        <input id="name" type="text" bind:value={name}
          placeholder="Juan García" disabled={loading}
          autocomplete="name" />
      </div>

      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" bind:value={email}
          placeholder="tu@empresa.com" disabled={loading}
          autocomplete="email" />
      </div>

      <div class="field">
        <label for="password">Contraseña</label>
        <input id="password" type="password" bind:value={password}
          placeholder="••••••••" disabled={loading}
          class:weak={passwordWeak}
          onkeydown={handleKeydown}
          autocomplete="new-password" />
        {#if passwordWeak}
          <span class="hint warn">⚠ Mínimo 8 caracteres</span>
        {:else if password.length >= 8}
          <span class="hint ok">✓ OK</span>
        {:else}
          <span class="hint">Mínimo 8 caracteres</span>
        {/if}
      </div>

      <button class="btn-primary" onclick={handleRegister} disabled={!canSubmit}>
        {#if loading}<span class="spinner"></span>{:else}Crear cuenta{/if}
      </button>
    </div>

    <p class="switch">
      ¿Ya tenés cuenta? <a href="/auth/login">Iniciá sesión</a>
    </p>
  </div>
</div>

<style>
  .page {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0a0a0a;
    padding: 1.5rem;
  }
  .card {
    background: #111;
    border: 1px solid #222;
    border-radius: 20px;
    padding: 2.5rem;
    width: 100%;
    max-width: 420px;
  }
  .logo {
    display: flex; align-items: center; gap: 0.6rem;
    margin-bottom: 2rem; text-decoration: none;
  }
  .logo-dot {
    width: 28px; height: 28px; border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ff4444, #cc0000);
    border: 2px solid rgba(255,255,255,0.1);
  }
  .logo-text { font-weight: 700; font-size: 1rem; color: #fff; }
  h1 { font-size: 1.7rem; font-weight: 800; margin-bottom: 0.4rem; }
  .subtitle { color: #888; font-size: 0.9rem; margin-bottom: 1.8rem; }
  .alert {
    background: rgba(229,62,62,0.12);
    border: 1px solid rgba(229,62,62,0.35);
    color: #fc8181; padding: 0.75rem 1rem;
    border-radius: 10px; font-size: 0.88rem; margin-bottom: 1.2rem;
  }
  .form { display: flex; flex-direction: column; gap: 1rem; }
  .field { display: flex; flex-direction: column; gap: 0.4rem; }
  label { font-size: 0.85rem; font-weight: 600; color: #ccc; }
  input {
    background: #0d0d0d; border: 1px solid #2a2a2a;
    border-radius: 10px; padding: 0.75rem 1rem;
    color: #fff; font-size: 0.95rem; outline: none;
    transition: border-color 0.2s; width: 100%; font-family: inherit;
  }
  input:focus { border-color: #e53e3e; }
  input.weak { border-color: #d69e2e; }
  input:disabled { opacity: 0.5; cursor: not-allowed; }
  input::placeholder { color: #444; }
  .hint { font-size: 0.78rem; color: #666; }
  .hint.warn { color: #d69e2e; }
  .hint.ok { color: #48bb78; }
  .btn-primary {
    background: #e53e3e; color: #fff; border: none;
    padding: 0.85rem; border-radius: 10px;
    font-size: 1rem; font-weight: 600; cursor: pointer;
    transition: background 0.2s; margin-top: 0.4rem;
    display: flex; align-items: center; justify-content: center;
    font-family: inherit;
  }
  .btn-primary:hover:not(:disabled) { background: #c53030; }
  .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
  .spinner {
    width: 18px; height: 18px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff; border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }
@keyframes spin {
    to { transform: rotate(360deg); }
  }
</style>