<script>
  import '../styles/features.css';

  const features = [
    {
      icon: '⚡',
      iconClass: 'feature-card__icon--purple',
      title: 'Automatizaciones inteligentes',
      desc: 'Diseñá flujos de trabajo visuales sin escribir una sola línea de código. Conectá tus herramientas favoritas y dejá que Nexus haga el trabajo.',
      large: true,
      bars: [
        { label: 'Email marketing', pct: 92 },
        { label: 'CRM sync',        pct: 78 },
        { label: 'Reportes',        pct: 85 },
      ],
    },
    {
      icon: '📊',
      iconClass: 'feature-card__icon--blue',
      title: 'Analíticas en tiempo real',
      desc: 'Dashboards interactivos con datos actualizados al instante. Tomá decisiones basadas en información, no suposiciones.',
      large: false,
    },
    {
      icon: '🔒',
      iconClass: 'feature-card__icon--green',
      title: 'Seguridad empresarial',
      desc: 'Cifrado end-to-end, autenticación 2FA, SSO con SAML 2.0 y cumplimiento con GDPR y SOC 2 Tipo II.',
      large: false,
    },
    {
      icon: '🤝',
      iconClass: 'feature-card__icon--pink',
      title: 'Colaboración en equipo',
      desc: 'Comentarios en contexto, roles y permisos granulares, y espacios de trabajo compartidos para equipos de cualquier tamaño.',
      large: false,
    },
    {
      icon: '🔗',
      iconClass: 'feature-card__icon--orange',
      title: 'Más de 200 integraciones',
      desc: 'Conectá con Slack, Salesforce, HubSpot, Notion y cientos de herramientas más a través de nuestra API REST.',
      large: false,
    },
  ];
</script>

<section class="features section" id="features">
  <div class="container">
    <div class="features__header">
      <div class="features__badge">
        <span class="badge">Características</span>
      </div>
      <h2 class="features__title">Todo lo que necesitás, en un lugar</h2>
      <p class="features__subtitle">
        Diseñado para equipos modernos que buscan velocidad, claridad y resultados reales.
      </p>
    </div>

    <div class="features__grid">
      {#each features as f}
        <div class="feature-card" class:feature-card--large={f.large}>
          <div class="feature-card__icon {f.iconClass}">{f.icon}</div>
          <h3 class="feature-card__title">{f.title}</h3>
          <p class="feature-card__desc">{f.desc}</p>

          {#if f.bars}
            <div class="feature-card__visual">
              {#each f.bars as bar}
                <div class="feature-bar">
                  <div class="feature-bar__label">
                    <span>{bar.label}</span>
                    <span>{bar.pct}%</span>
                  </div>
                  <div class="feature-bar__track">
                    <div class="feature-bar__fill" style="width: {bar.pct}%"></div>
                  </div>
                </div>
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
