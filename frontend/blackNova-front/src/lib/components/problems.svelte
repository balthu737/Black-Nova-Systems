<script>
  import '../styles/problems.css';
  import IntersectionObserver from 'svelte-intersection-observer';
  import { IconKeyboard, IconAlertTriangle, IconClockPause } from '@tabler/icons-svelte';

  const problems = [
    {
      icon: IconKeyboard,
      title: 'Carga manual de datos',
      desc: 'Los empleados invierten horas ingresando información a mano, generando cuellos de botella y desperdicios de tiempo valioso.',
    },
    {
      icon: IconAlertTriangle,
      title: 'Errores humanos frecuentes',
      desc: 'Los procesos manuales son propensos a errores de transcripción, datos duplicados e inconsistencias difíciles de detectar.',
    },
    {
      icon: IconClockPause,
      title: 'Flujos de trabajo lentos',
      desc: 'La aprobación manual de documentos y la falta de integración entre sistemas ralentizan la operación completa.',
    },
  ];

  /*
    cardEls: array de referencias DOM, una por card.
    bind:this={cardEls[i]} conecta cada div con su slot en el array.
    IntersectionObserver detecta cuándo cada card entra al viewport.
  */
  let cardEls = [];
</script>

<section class="section problems" id="problems">
  <div class="container">

    <div class="problems-header">
      <div class="section-label">El Problema</div>
      <h2 class="section-title">
        Muchas empresas aún dependen<br>de procesos manuales
      </h2>
    </div>

    <div class="prob-grid">
      {#each problems as problem, i}
        <!--
          Cada card tiene su propio IntersectionObserver.
          let:intersecting expone si el elemento está en pantalla.
          transition-delay escalonado: 0s, 0.08s, 0.16s
        -->
        <IntersectionObserver element={cardEls[i]} let:intersecting>
          <div
            bind:this={cardEls[i]}
            class="prob-card fade-up"
            class:visible={intersecting}
            style="transition-delay: {i * 0.08}s"
          >
            <div class="prob-icon">
              <svelte:component this={problem.icon} size={20} stroke={1.5} />
            </div>
            <h3>{problem.title}</h3>
            <p>{problem.desc}</p>
          </div>
        </IntersectionObserver>
      {/each}
    </div>

  </div>
</section>