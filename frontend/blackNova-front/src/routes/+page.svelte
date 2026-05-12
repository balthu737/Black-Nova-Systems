<script>
  import '../lib/styles/global.css';
  import Navbar       from '$lib/components/Navbar.svelte';
  import Hero         from '$lib/components/Hero.svelte';
  import Features     from '$lib/components/Features.svelte';
  import Testimonials from '$lib/components/Testimonials.svelte';
  import Pricing      from '$lib/components/Pricing.svelte';
  import Footer       from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Nexus — La plataforma que escala con tu negocio</title>
  <meta name="description" content="Automatización, analíticas en tiempo real y colaboración para equipos modernos." />
</svelte:head>

<Navbar />
<main>
  <Hero />
  <Features />
  <Testimonials />
  <Pricing />
</main>
<Footer />
