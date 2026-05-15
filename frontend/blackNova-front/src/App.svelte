<script>
  import './lib/styles/global.css';
  import Navbar    from './lib/components/Navbar.svelte';
  import Hero      from './lib/components/Hero.svelte';
  import Problems  from './lib/components/Problems.svelte';
  import Solution  from './lib/components/Solution.svelte';
  import Benefits  from './lib/components/Benefits.svelte';
  import About     from './lib/components/About.svelte';
  import CTA       from './lib/components/CTA.svelte';
  import Footer    from './lib/components/Footer.svelte';
</script>

<Navbar />
<main>
  <Hero />
  <Problems />
  <Solution />
  <Benefits />
  <About />
  <CTA />
</main>
<Footer />