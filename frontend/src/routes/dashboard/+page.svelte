<script>
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { user, isLoggedIn, logout } from '$lib/stores/auth.js';

  onMount(() => {
    if (!$isLoggedIn) goto('/auth/login');
  });

  async function handleLogout() {
    await logout();
    goto('/');
  }
</script>

{#if $isLoggedIn}
<div class="page">
  <nav class="topbar">
    <a href="/" class="logo">
      <span class="logo-dot"></span>
      <span class="logo-text">Black Nova Systems</span>
    </a>
    <div class="topbar-right">
      <span class="user-email">{$user?.email}</span>
      <button class="btn-logout" onclick={handleLogout}>Cerrar sesión</button>
    </div>
  </nav>

  <main class="main">
    <div class="welcome">
      <h1>Bienvenido, {$user?.name ?? $user?.email} 👋</h1>
      <p>Este es tu panel de control.</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <span class="stat-label">Documentos procesados</span>
        <span class="stat-value">12.847</span>
        <span class="stat-change">↑ 23% este mes</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Tiempo ahorrado</span>
        <span class="stat-value">342h</span>
        <span class="stat-change">↑ 45% este mes</span>
      </div>
      <div class="stat-card">
        <span class="stat-label">Precisión</span>
        <span class="stat-value">99.9%</span>
        <span class="stat-change">↑ 0.1% este mes</span>
      </div>
    </div>

    <div class="placeholder-card">
      🚧 El dashboard completo está en construcción.
    </div>
  </main>
</div>
{/if}

<style>
  .page { min-height: 100vh; background: #0a0a0a; color: #fff; font-family: 'Inter', system-ui, sans-serif; }
  .topbar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 1rem 2.5rem; background: rgba(10,10,10,0.95);
    border-bottom: 1px solid #1a1a1a; position: sticky; top: 0; z-index: 10;
  }
  .logo { display: flex; align-items: center; gap: 0.6rem; text-decoration: none; }
  .logo-dot {
    width: 26px; height: 26px; border-radius: 50%;
    background: radial-gradient(circle at 35% 35%, #ff4444, #cc0000);
    border: 2px solid rgba(255,255,255,0.1);
  }
  .logo-text { font-weight: 700; font-size: 1rem; color: #fff; }
  .topbar-right { display: flex; align-items: center; gap: 1.2rem; }
  .user-email { color: #888; font-size: 0.88rem; }
  .btn-logout {
    background: #1a1a1a; border: 1px solid #333; color: #ccc;
    padding: 0.45rem 1rem; border-radius: 8px; font-size: 0.85rem;
    cursor: pointer; transition: background 0.2s, color 0.2s; font-family: inherit;
  }
  .btn-logout:hover { background: #e53e3e; border-color: #e53e3e; color: #fff; }
  .main { max-width: 1100px; margin: 0 auto; padding: 3rem 2.5rem; }
  .welcome { margin-bottom: 2.5rem; }
  .welcome h1 { font-size: 1.8rem; font-weight: 800; margin-bottom: 0.4rem; }
  .welcome p { color: #888; font-size: 0.95rem; }
  .stats-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.2rem; margin-bottom: 2rem;
  }
  .stat-card {
    background: #111; border: 1px solid #222; border-radius: 14px;
    padding: 1.5rem; display: flex; flex-direction: column; gap: 0.3rem;
  }
  .stat-label { color: #888; font-size: 0.82rem; }
  .stat-value { font-size: 2rem; font-weight: 800; }
  .stat-change { color: #e53e3e; font-size: 0.8rem; }
  .placeholder-card {
    background: #111; border: 1px dashed #2a2a2a;
    border-radius: 14px; padding: 3rem;
    text-align: center; color: #555; font-size: 0.95rem;
  }
</style>