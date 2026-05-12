<script>
  import '../styles/navbar.css';
  import { onMount } from 'svelte';

  let scrolled = false;

  onMount(() => {
    const handler = () => { scrolled = window.scrollY > 20; };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  });

  const links = [
    { label: 'Características', href: '#features' },
    { label: 'Testimonios',     href: '#testimonials' },
    { label: 'Precios',         href: '#pricing' },
    { label: 'Empresa',         href: '#company' },
  ];
</script>

<header class="navbar" class:scrolled>
  <div class="container">
    <div class="navbar__inner">
      <!-- Logo -->
      <a href="/" class="navbar__logo">
        <div class="navbar__logo-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1L16 5V13L9 17L2 13V5L9 1Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
            <circle cx="9" cy="9" r="2.5" fill="white"/>
          </svg>
        </div>
        Nexus
      </a>

      <!-- Nav links -->
      <nav class="navbar__nav" aria-label="Navegación principal">
        {#each links as link}
          <a href={link.href} class="navbar__link">{link.label}</a>
        {/each}
      </nav>

      <!-- Actions -->
      <div class="navbar__actions">
        <a href="#login"   class="btn btn-outline" style="padding:10px 20px; font-size:0.875rem;">Ingresar</a>
        <a href="#signup"  class="btn btn-primary" style="padding:10px 20px; font-size:0.875rem;">Empezar gratis</a>
        <button class="navbar__toggle" aria-label="Menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </div>
</header>
