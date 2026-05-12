<script>
  import '../styles/pricing.css';

  let annual = true;

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 0,
      annualPrice: 0,
      desc: 'Perfecto para empezar a explorar Nexus sin compromisos.',
      featured: false,
      cta: 'Empezar gratis',
      features: [
        { text: '3 proyectos activos',        yes: true },
        { text: '1.000 automatizaciones/mes', yes: true },
        { text: 'Dashboards básicos',          yes: true },
        { text: 'Soporte por email',           yes: true },
        { text: 'Integraciones premium',       yes: false },
        { text: 'SSO / SAML 2.0',             yes: false },
      ],
    },
    {
      name: 'Pro',
      monthlyPrice: 49,
      annualPrice: 39,
      desc: 'Para equipos que necesitan más potencia y colaboración.',
      featured: true,
      cta: 'Comenzar prueba gratis',
      features: [
        { text: 'Proyectos ilimitados',         yes: true },
        { text: '50.000 automatizaciones/mes',  yes: true },
        { text: 'Dashboards avanzados',          yes: true },
        { text: 'Soporte prioritario 24/7',      yes: true },
        { text: 'Integraciones premium',         yes: true },
        { text: 'SSO / SAML 2.0',              yes: false },
      ],
    },
    {
      name: 'Enterprise',
      monthlyPrice: 149,
      annualPrice: 119,
      desc: 'Seguridad, control y escala para organizaciones grandes.',
      featured: false,
      cta: 'Contactar ventas',
      features: [
        { text: 'Todo lo de Pro',                     yes: true },
        { text: 'Automatizaciones ilimitadas',         yes: true },
        { text: 'SLA 99.99% garantizado',             yes: true },
        { text: 'Soporte dedicado + CSM',             yes: true },
        { text: 'Integraciones premium',              yes: true },
        { text: 'SSO / SAML 2.0 + SCIM',            yes: true },
      ],
    },
  ];

  $: price = (plan) => annual ? plan.annualPrice : plan.monthlyPrice;
</script>

<section class="pricing section" id="pricing">
  <div class="container">
    <div class="pricing__header">
      <span class="badge">Precios</span>
      <h2 class="pricing__title">Simple, transparente, sin sorpresas</h2>
      <p class="pricing__subtitle">Probá cualquier plan 14 días gratis. Sin tarjeta de crédito.</p>

      <div class="pricing__toggle">
        <button
          class="pricing__toggle-btn"
          class:active={!annual}
          on:click={() => annual = false}
        >Mensual</button>
        <button
          class="pricing__toggle-btn"
          class:active={annual}
          on:click={() => annual = true}
        >Anual <span class="pricing__save">Ahorrá 20%</span></button>
      </div>
    </div>

    <div class="pricing__grid">
      {#each plans as plan}
        <div class="pricing-card" class:pricing-card--featured={plan.featured}>
          {#if plan.featured}
            <div class="pricing-card__popular">Más popular</div>
          {/if}

          <p class="pricing-card__name">{plan.name}</p>

          <div class="pricing-card__price">
            <span class="pricing-card__currency">$</span>
            <span class="pricing-card__amount">{price(plan)}</span>
            <span class="pricing-card__period">/ mes</span>
          </div>

          <p class="pricing-card__desc">{plan.desc}</p>

          <a
            href="#signup"
            class="btn {plan.featured ? 'btn-primary' : 'btn-outline'}"
            style="width:100%; justify-content:center; margin-bottom: var(--space-md);"
          >{plan.cta}</a>

          <div class="pricing-card__divider"></div>

          <ul class="pricing-card__features">
            {#each plan.features as feat}
              <li class="pricing-card__feature" class:pricing-card__feature--inactive={!feat.yes}>
                <span class="pricing-card__feature-check {feat.yes ? 'pricing-card__feature-check--yes' : 'pricing-card__feature-check--no'}">
                  {feat.yes ? '✓' : '✕'}
                </span>
                {feat.text}
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
  </div>
</section>
