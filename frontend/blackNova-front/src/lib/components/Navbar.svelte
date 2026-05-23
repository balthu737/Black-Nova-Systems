<script>
  import '../styles/navbar.css';
  import { onMount, createEventDispatcher } from 'svelte';

  /*
    createEventDispatcher permite que este componente
    emita eventos hacia su padre (App.svelte).
    dispatch('navigate', 'login') → App recibe e.detail = 'login'
  */
  const dispatch = createEventDispatcher();

  let scrolled = false;

  onMount(() => {
    const handleScroll = () => { scrolled = window.scrollY > 20; };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const links = [
    { label: 'Producto',   href: '#solution'  },
    { label: 'Soluciones', href: '#problems'  },
    { label: 'Nosotros',   href: '#about'     },
    { label: 'Contacto',   href: '#footer'    },
  ];
</script>

<header class="navbar" class:scrolled>
  <div class="container">
    <div class="nav-inner">

      <button class="logo" on:click={() => dispatch('navigate', 'home')}>
        <div class="logo-mark">
          <div class="logo-ring"></div>
          <div class="logo-core"></div>
        </div>
        Black Nova Systems
      </button>

      <nav class="nav-links">
        {#each links as link}
          <a href={link.href} class="nav-link">{link.label}</a>
        {/each}
        <!-- Botón que navega a /products -->
        <button
          class="nav-link"
          on:click={() => dispatch('navigate', 'products')}
        >
          Panel
        </button>
        <!-- Botón que navega a /login -->
        <button
          class="btn-red"
          on:click={() => dispatch('navigate', 'login')}
        >
          Iniciar sesión
        </button>
      </nav>

      <button class="nav-hamburger" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>

    </div>
  </div>
</header>