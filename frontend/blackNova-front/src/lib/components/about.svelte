<script>
  import '../styles/about.css';

  const stats = [
    { num: '+200', lbl: 'Empresas automatizadas' },
    { num: '98%',  lbl: 'Reducción de errores'   },
    { num: '5M+',  lbl: 'Documentos procesados'  },
  ];
</script>

<section class="section about" id="about">
  <div class="container">
    <div class="about-inner">

      <div>
        <div class="section-label">Nosotros</div>
        <p class="about-quote">
          Construimos tecnología que
          <span>absorbe la complejidad</span>
          y devuelve claridad.
        </p>
        <div class="about-stats">
          {#each stats as stat}
            <div>
              <div class="about-stat-num">{stat.num}</div>
              <div class="about-stat-lbl">{stat.lbl}</div>
            </div>
          {/each}
        </div>
      </div>

      <div>
        <p class="about-body">
          Black Nova Systems desarrolla soluciones avanzadas de automatización
          que transforman flujos de trabajo manuales en sistemas digitales
          inteligentes.
        </p>
        <p class="about-body">
          Nuestro nombre evoca la potencia de una nova: la energía concentrada
          que colapsa la complejidad y la convierte en algo nuevo, más eficiente
          y más poderoso. Aplicamos esa filosofía a cada proceso que automatizamos.
        </p>
        <p class="about-body">
          Fundada por ingenieros con experiencia en automatización industrial y
          software empresarial, nuestra misión es eliminar el trabajo repetitivo
          para que los equipos humanos puedan enfocarse en lo que realmente importa.
        </p>
      </div>

    </div>
  </div>
</section>