<script>
  import '../styles/navbar.css';
  import { onMount } from 'svelte';

  /*
    onMount corre SOLO en el browser, no en SSR.
    Ideal para listeners de DOM como scroll.
    Retornamos una función de cleanup que remueve
    el listener cuando el componente se destruye.
  */
  let scrolled = false;

  onMount(() => {
    const handleScroll = () => {
      scrolled = window.scrollY > 20;
    };
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

<!--
  class:scrolled={scrolled} es la sintaxis de Svelte para
  agregar una clase condicionalmente. Equivale a:
  class={scrolled ? 'navbar scrolled' : 'navbar'}
-->
<header class="navbar" class:scrolled>
  <div class="container">
    <div class="nav-inner">

      <a href="/" class="logo">
        <div class="logo-mark">
          <div class="logo-ring"></div>
          <div class="logo-core"></div>
        </div>
        Black Nova Systems
      </a>

      <nav class="nav-links">
        {#each links as link}
          <a href={link.href} class="nav-link">{link.label}</a>
        {/each}
        <button class="btn-red">Solicitar Demo</button>
      </nav>

      <button class="nav-hamburger" aria-label="Menú">
        <span></span><span></span><span></span>
      </button>

    </div>
  </div>
</header>