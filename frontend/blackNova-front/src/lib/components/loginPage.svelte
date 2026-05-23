<script>
  import '../styles/login.css';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // Estado del formulario
  let user    = '';
  let password = '';
  let loading  = false;
  let error    = '';
  let showPass = false;
  let respuesta;

  /*
    handleSubmit simula una llamada a API.
    En producción reemplazarías el setTimeout por
    un fetch() real a tu backend.
  */
  async function handleSubmit() {
    error = '';

    // Validación básica del lado cliente
    if (!user || !password) {
      error = 'Completá todos los campos.';
      return;
    }
    if (password.length < 6) {
      error = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    loading = true;

    // Simulación de llamada a API (reemplazar con fetch real)
    await fetch(' http://localhost:3000/controllers/userController.js', {
      method: 'POST',
       headers: { 'Content-Type': 'application/json' }, 
       body: JSON.stringify({ name, password }),
       credentials: 'include'
    });
    const data = await respuesta.json();

    loading = false;

    // En un caso real verificarías la respuesta del servidor.
    // Si es exitosa, navegás al panel de productos.
    dispatch('navigate', 'products');
  }
</script>

<div class="login-page">

  <!-- Fondo con starfield y glow -->
  <div class="login-bg">
    <div class="login-glow login-glow--1"></div>
    <div class="login-glow login-glow--2"></div>
    <svg class="login-stars" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      <circle cx="120"  cy="80"  r="1"   fill="rgba(255,255,255,0.4)"/>
      <circle cx="300"  cy="150" r="0.7" fill="rgba(255,255,255,0.3)"/>
      <circle cx="500"  cy="40"  r="1.2" fill="rgba(255,255,255,0.5)"/>
      <circle cx="750"  cy="100" r="0.8" fill="rgba(255,255,255,0.3)"/>
      <circle cx="950"  cy="60"  r="1"   fill="rgba(255,255,255,0.4)"/>
      <circle cx="1100" cy="200" r="0.6" fill="rgba(255,255,255,0.25)"/>
      <circle cx="200"  cy="400" r="0.9" fill="rgba(255,255,255,0.2)"/>
      <circle cx="600"  cy="500" r="1"   fill="rgba(255,255,255,0.3)"/>
      <circle cx="900"  cy="350" r="0.7" fill="rgba(255,255,255,0.25)"/>
      <circle cx="1050" cy="450" r="1.1" fill="rgba(255,255,255,0.2)"/>
      <circle cx="80"   cy="600" r="0.8" fill="rgba(255,255,255,0.3)"/>
      <circle cx="400"  cy="650" r="1"   fill="rgba(255,255,255,0.2)"/>
      <circle cx="700"  cy="700" r="0.6" fill="rgba(255,255,255,0.15)"/>
      <circle cx="1150" cy="600" r="0.9" fill="rgba(255,255,255,0.2)"/>
    </svg>
  </div>

  <!-- Card de login -->
  <div class="login-card">

    <!-- Logo -->
    <button
      class="login-logo"
      on:click={() => dispatch('navigate', 'home')}
    >
      <div class="logo-mark" style="width:28px; height:28px;">
        <div class="logo-ring" style="width:24px; height:24px;"></div>
        <div class="logo-core" style="width:8px; height:8px;"></div>
      </div>
      <span>Black Nova Systems</span>
    </button>

    <!-- Encabezado -->
    <div class="login-header">
      <h1 class="login-title">Bienvenido de nuevo</h1>
      <p class="login-subtitle">
        Ingresá a tu cuenta para acceder al panel de control.
      </p>
    </div>

    <!-- Formulario -->
    <form class="login-form" on:submit|preventDefault={handleSubmit}>

      <!-- Email -->
      <div class="field">
        <label class="field-label" for="email">Email</label>
        <div class="field-input-wrap">
          <svg class="field-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="3" width="14" height="10" rx="2"
              stroke="currentColor" stroke-width="1.25"/>
            <path d="M1 6l7 4 7-4"
              stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
          </svg>
          <input
            id="email"
            type="email"
            class="field-input"
            placeholder="tu@empresa.com"
            bind:value={email}
            autocomplete="email"
          />
        </div>
      </div>

      <!-- Contraseña -->
      <div class="field">
        <div class="field-label-row">
          <label class="field-label" for="password">Contraseña</label>
          <button type="button" class="field-forgot">
            ¿Olvidaste tu contraseña?
          </button>
        </div>
        <div class="field-input-wrap">
          <svg class="field-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="3" y="7" width="10" height="7" rx="1.5"
              stroke="currentColor" stroke-width="1.25"/>
            <path d="M5 7V5a3 3 0 016 0v2"
              stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
          </svg>
          <input
            id="password"
            type= 'password'
            class="field-input"
            placeholder="••••••••"
            bind:value={password}
            autocomplete="current-password"
          />
          <!--
            Botón toggle para mostrar/ocultar contraseña.
            Cambia el type del input entre 'password' y 'text'.
          -->
          <button
            type="button"
            class="field-toggle-pass"
            on:click={() => showPass = !showPass}
            aria-label={showPass ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          >
            {#if showPass}
              <!-- Ojo tachado -->
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 2l12 12M6.5 6.6A2 2 0 0110 9.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
                <path d="M4.2 4.3C2.8 5.2 1.5 6.5 1 8c1 3 3.8 5 7 5 1.4 0 2.7-.4 3.8-1.1M7 3.1C7.3 3 7.7 3 8 3c3.2 0 6 2 7 5-.3 1-1 1.9-1.7 2.6" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
              </svg>
            {:else}
              <!-- Ojo normal -->
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M1 8c1-3 3.8-5 7-5s6 2 7 5c-1 3-3.8 5-7 5s-6-2-7-5z" stroke="currentColor" stroke-width="1.25"/>
                <circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.25"/>
              </svg>
            {/if}
          </button>
        </div>
      </div>

      <!-- Error message -->
      {#if error}
        <div class="login-error">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.25"/>
            <path d="M7 4v3M7 9.5v.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
          </svg>
          {error}
        </div>
      {/if}

      <!-- Submit -->
      <button
        type="submit"
        class="login-submit"
        class:loading
        disabled={loading}
      >
        {#if loading}
          <span class="login-spinner"></span>
          Verificando...
        {:else}
          Ingresar al panel
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
              stroke="currentColor" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        {/if}
      </button>

    </form>

    <!-- Divider -->
    <div class="login-divider">
      <span>o continuá con</span>
    </div>

    <!-- OAuth buttons -->
    <div class="login-oauth">
      <button class="oauth-btn">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M15.4 8.17c0-.57-.05-1.12-.14-1.64H8v3.1h4.16a3.56 3.56 0 01-1.54 2.34v1.94h2.5c1.46-1.35 2.3-3.33 2.3-5.74z" fill="#4285F4"/>
          <path d="M8 16c2.1 0 3.86-.7 5.15-1.88l-2.5-1.95c-.7.47-1.59.74-2.65.74-2.04 0-3.76-1.38-4.37-3.22H1.06v2.01A8 8 0 008 16z" fill="#34A853"/>
          <path d="M3.63 9.69A4.82 4.82 0 013.38 8c0-.59.1-1.16.25-1.69V4.3H1.06A8 8 0 000 8c0 1.29.31 2.51.86 3.59l2.77-1.9z" fill="#FBBC05"/>
          <path d="M8 3.18c1.15 0 2.18.4 2.99 1.17l2.24-2.24A8 8 0 001.06 4.3L3.83 6.3C4.44 4.56 6.16 3.18 8 3.18z" fill="#EA4335"/>
        </svg>
        Google
      </button>
      <button class="oauth-btn">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38v-1.33C3.72 14.36 3.26 13 3.26 13c-.36-.92-.89-1.16-.89-1.16-.73-.5.05-.49.05-.49.8.06 1.23.82 1.23.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.69 7.69 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        GitHub
      </button>
    </div>

    <!-- Footer del card -->
    <p class="login-register">
      ¿No tenés cuenta?
      <button type="button" class="login-register-link">
        Contactá a ventas
      </button>
    </p>

  </div>

</div>