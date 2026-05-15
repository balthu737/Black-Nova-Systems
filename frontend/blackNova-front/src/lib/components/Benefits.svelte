<script>
  import '../styles/benefits.css';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { IconRocket, IconShieldCheck, IconPlugConnected, IconChartDots } from '@tabler/icons-svelte';

  const benefits = [
    {
      icon: IconRocket,
      title: 'Procesos más rápidos',
      desc: 'Reducí el tiempo de procesamiento hasta un 90% con flujos automatizados que nunca duermen.',
    },
    {
      icon: IconShieldCheck,
      title: 'Menos errores humanos',
      desc: 'La automatización elimina la transcripción manual, reduciendo los errores a casi cero.',
    },
    {
      icon: IconPlugConnected,
      title: 'Fácil integración',
      desc: 'Compatible con SAP, Salesforce, Oracle, Google Workspace y más de 200 sistemas.',
    },
    {
      icon: IconChartDots,
      title: 'Infraestructura escalable',
      desc: 'Desde PyMEs hasta corporaciones, la plataforma se adapta sin fricciones.',
    },
  ];

  let cardEls = [];
</script>

<section class="section benefits" id="benefits">
  <div class="container">

    <div class="benefits-header">
      <div class="section-label">Beneficios</div>
      <h2 class="section-title">Por qué elegir Black Nova Systems</h2>
      <p class="section-sub">
        Tecnología que transforma, no que complica.
      </p>
    </div>

    <div class="ben-grid">
      {#each benefits as benefit, i}
        <IntersectionObserver element={cardEls[i]} let:intersecting>
          <div
            bind:this={cardEls[i]}
            class="ben-card fade-up"
            class:visible={intersecting}
            style="transition-delay: {i * 0.08}s"
          >
            <div class="ben-number">0{i + 1}</div>
            <div class="ben-icon">
              <svelte:component this={benefit.icon} size={22} stroke={1.5} />
            </div>
            <h3>{benefit.title}</h3>
            <p>{benefit.desc}</p>
          </div>
        </IntersectionObserver>
      {/each}
    </div>

  </div>
</section>