<script>
  import './lib/styles/global.css';

  import Navbar       from './lib/components/Navbar.svelte';
  import Hero         from './lib/components/Hero.svelte';
  import Problems     from './lib/components/Problems.svelte';
  import Solution     from './lib/components/Solution.svelte';
  import Benefits     from './lib/components/Benefits.svelte';
  import About        from './lib/components/About.svelte';
  import CTA          from './lib/components/CTA.svelte';
  import Footer       from './lib/components/Footer.svelte';
  import LoginPage    from './lib/components/LoginPage.svelte';
  import ProductsPage from './lib/components/ProductsPage.svelte';

  /*
    Svelte puro no tiene router, así que manejamos
    la navegación con una variable reactiva simple.
    'page' puede ser: 'home' | 'login' | 'products'
  */
  let page = 'home';

  // Exponemos la función globalmente para que Navbar y otros
  // componentes puedan cambiar de página sin pasar props
  // (alternativa simple a un store)
  window.__navigate = (target) => { page = target; };
</script>

{#if page === 'home'}
  <Navbar on:navigate={(e) => page = e.detail} />
  <main>
    <Hero />
    <Problems />
    <Solution />
    <Benefits />
    <About />
    <CTA />
  </main>
  <Footer />

{:else if page === 'login'}
  <LoginPage on:navigate={(e) => page = e.detail} />

{:else if page === 'products'}
  <ProductsPage on:navigate={(e) => page = e.detail} />
{/if}