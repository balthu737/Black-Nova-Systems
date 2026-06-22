<script>
  import { goto } from '$app/navigation';
  import { lang, t } from '$lib/stores/lang.js';
  import { user, isLoggedIn, logout } from '../stores/auth.js';

  async function handleLogout() {
    await logout();
    goto('/');
  }
</script>

<nav class="nav">
  <a href="/" class="nav-brand">
  <img src="/logo_full.png" alt="Black Nova Systems" class="logo-img" />
</a>

  <ul class="nav-links">
    <li><a href="#product">{$t.nav.product}</a></li>
    <li><a href="#solutions">{$t.nav.solutions}</a></li>
    <li><a href="#about">{$t.nav.about}</a></li>
    <li><a href="#contact">{$t.nav.contact}</a></li>
  </ul>

  <div class="nav-right">
    <!-- Selector de idioma -->
    <div class="lang-switcher">
      <button class="lang-btn" class:active={$lang === 'es'} on:click={() => lang.set('es')}>ES</button>
      <span class="lang-sep">|</span>
      <button class="lang-btn" class:active={$lang === 'en'} on:click={() => lang.set('en')}>EN</button>
    </div>

    {#if $isLoggedIn}
      <!-- Usuario logueado: mostrar nombre + botón dashboard + logout -->
      <a href="/dashboard" class="btn-ghost-sm">Dashboard</a>
      <button class="btn-logout" on:click={handleLogout}>
        {$user?.name?.split(' ')[0] ?? $user?.email} ↩
      </button>
    {:else}
      <!-- Sin sesión: login + demo -->
      <a href="/auth/login" class="btn-ghost-sm">
        {$t.nav.login ?? 'Login'}
      </a>
      <a href="/auth/register" class="btn-primary">
        {$t.nav.cta}
      </a>
    {/if}
  </div>
</nav>

<style>
  .nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.9rem 2.5rem;
    background: rgba(10, 10, 10, 0.92);
    backdrop-filter: blur(8px);
    border-bottom: 1px solid #1a1a1a;
  }

  .nav-brand {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
  }

 .logo-img {
  height: 36px;
  width: auto;
  object-fit: contain;
}

  .nav-links { display: flex; gap: 2rem; list-style: none; }
  .nav-links a { color: #ccc; text-decoration: none; font-size: 0.95rem; transition: color .2s; }
  .nav-links a:hover { color: #fff; }

  .nav-right { display: flex; align-items: center; gap: 0.8rem; }

  .lang-switcher { display: flex; align-items: center; gap: 0.3rem; margin-right: 0.4rem; }
  .lang-btn {
    background: none; border: none; color: #555;
    font-size: 0.8rem; font-weight: 600; letter-spacing: 0.05em;
    cursor: pointer; padding: 0.2rem 0.3rem; transition: color .2s;
    font-family: inherit;
  }
  .lang-btn:hover { color: #ccc; }
  .lang-btn.active { color: #fff; }
  .lang-sep { color: #333; font-size: 0.75rem; }

  .btn-primary {
    background: #e53e3e; color: #fff; border: none;
    padding: 0.6rem 1.3rem; border-radius: 8px;
    font-weight: 600; font-size: 0.9rem; cursor: pointer;
    transition: background .2s; text-decoration: none;
    display: inline-flex; align-items: center;
  }
  .btn-primary:hover { background: #c53030; }

  .btn-ghost-sm {
    background: transparent; color: #ccc;
    border: 1px solid #333; padding: 0.55rem 1rem;
    border-radius: 8px; font-size: 0.88rem; font-weight: 500;
    cursor: pointer; transition: border-color .2s, color .2s;
    text-decoration: none; display: inline-flex; align-items: center;
  }
  .btn-ghost-sm:hover { border-color: #888; color: #fff; }

  .btn-logout {
    background: transparent; color: #888;
    border: 1px solid #2a2a2a; padding: 0.55rem 1rem;
    border-radius: 8px; font-size: 0.85rem; cursor: pointer;
    transition: all .2s; font-family: inherit;
  }
  .btn-logout:hover { background: #e53e3e; border-color: #e53e3e; color: #fff; }

  @media (max-width: 768px) {
    .nav-links { display: none; }
    .nav { padding: 0.9rem 1.2rem; }
  }
</style>