<script>
  import { t } from '$lib/stores/lang.js';
  import Nav from '$lib/components/nav.svelte';
  import Hero from '$lib/components/hero.svelte';
  import ProblemSection from '$lib/components/problemsection.svelte';
  import SolutionSection from '$lib/components/solutionsection.svelte';
  import WhySection from '$lib/components/WhySection.svelte';
  import AboutSection from '$lib/components/AboutSection.svelte';
  import CtaSection from '$lib/components/CtaSection.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>{$t.hero.title.join(' ')} — Black Nova Systems</title>
  <meta name="description" content={$t.hero.subtitle} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet" />
</svelte:head>

<Nav />
<main>
  <Hero />
  <ProblemSection />
  <SolutionSection />
  <WhySection />
  <AboutSection />
  <CtaSection />
</main>
<Footer />
