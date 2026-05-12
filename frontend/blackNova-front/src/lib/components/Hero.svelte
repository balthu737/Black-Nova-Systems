<script>
  import '../styles/hero.css';
</script>

<section class="hero" id="home">
  <!-- Background -->
  <div class="hero__bg">
    <div class="hero__orb hero__orb--1"></div>
    <div class="hero__orb hero__orb--2"></div>
    <div class="hero__grid"></div>
  </div>

  <div class="container">
    <div class="hero__content">
      <!-- Text side -->
      <div class="hero__text">
        <div class="hero__badge">
          <span class="badge">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
              <circle cx="5" cy="5" r="5"/>
            </svg>
            Nuevo — Lanzamos v2.0
          </span>
        </div>

        <h1 class="hero__title">
          La plataforma que <em>escala</em> con tu negocio
        </h1>

        <p class="hero__desc">
          Potenciá tu equipo con herramientas inteligentes, analíticas en tiempo real
          y flujos de trabajo automatizados. Todo en un solo lugar.
        </p>

        <div class="hero__actions">
          <a href="#signup" class="btn btn-primary">
            Comenzar gratis
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#demo" class="btn btn-outline">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.5"/>
              <path d="M5.5 5L9.5 7L5.5 9V5Z" fill="currentColor"/>
            </svg>
            Ver demo
          </a>
        </div>

        <div class="hero__trust">
          <div class="hero__avatars">
            {#each ['AG', 'MR', 'LP', 'CK'] as initials}
              <div class="hero__avatar">{initials}</div>
            {/each}
          </div>
          <p class="hero__trust-text">
            <strong>+12.000 equipos</strong> ya confían en Nexus
          </p>
        </div>
      </div>

      <!-- Visual side -->
      <div class="hero__visual">
        <!-- Floating card 1 -->
        <div class="hero__floating hero__floating--1">
          <div class="hero__floating-icon hero__floating-icon--green">📈</div>
          <div class="hero__floating-text">
            <strong>+34% crecimiento</strong>
            <span>Este mes</span>
          </div>
        </div>

        <!-- Main card -->
        <div class="hero__card">
          <div class="hero__card-header">
            <div class="hero__card-dots">
              <div class="hero__card-dot hero__card-dot--red"></div>
              <div class="hero__card-dot hero__card-dot--yellow"></div>
              <div class="hero__card-dot hero__card-dot--green"></div>
            </div>
            <span class="hero__card-label">dashboard.nexus.io</span>
          </div>

          <div class="hero__metric">
            <p class="hero__metric-label">Ingresos mensuales</p>
            <p class="hero__metric-value">
              $84.2k
              <span class="hero__metric-delta">↑ 12.5%</span>
            </p>
          </div>

          <!-- Sparkline SVG -->
          <div class="hero__sparkline">
            <svg viewBox="0 0 280 60" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#6C63FF" stop-opacity="0.4"/>
                  <stop offset="100%" stop-color="#6C63FF" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,50 C20,45 40,55 60,40 C80,25 100,35 120,20 C140,10 160,15 180,8 C200,2 220,12 240,5 C255,0 270,3 280,1"
                stroke="#6C63FF" stroke-width="2" fill="none" stroke-linecap="round"/>
              <path d="M0,50 C20,45 40,55 60,40 C80,25 100,35 120,20 C140,10 160,15 180,8 C200,2 220,12 240,5 C255,0 270,3 280,1 L280,60 L0,60 Z"
                fill="url(#lineGrad)"/>
            </svg>
          </div>

          <div class="hero__stats-row">
            <div class="hero__stat">
              <p class="hero__stat-num">1.284</p>
              <p class="hero__stat-lbl">Usuarios activos</p>
            </div>
            <div class="hero__stat">
              <p class="hero__stat-num">98.7%</p>
              <p class="hero__stat-lbl">Uptime SLA</p>
            </div>
          </div>
        </div>

        <!-- Floating card 2 -->
        <div class="hero__floating hero__floating--2">
          <div class="hero__floating-icon hero__floating-icon--blue">⚡</div>
          <div class="hero__floating-text">
            <strong>Automatización activa</strong>
            <span>24 flujos corriendo</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
