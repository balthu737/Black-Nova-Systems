<script>
  import '../styles/testimonials.css';

  const testimonials = [
    { quote: 'Nexus transformó completamente cómo manejamos nuestros procesos internos. Ahorramos más de 15 horas semanales solo en automatizaciones.',
      name: 'Valentina Torres', role: 'CTO, Fintech Corp', initials: 'VT', color: '#6C63FF' },
    { quote: 'Las analíticas en tiempo real nos permitieron tomar decisiones más rápidas. Los dashboards son increíblemente intuitivos.',
      name: 'Martín Aguirre', role: 'Head of Growth, SaaS Co', initials: 'MA', color: '#FF6584' },
    { quote: 'Probamos varias plataformas y Nexus fue la única que realmente escaló con nosotros sin perder rendimiento.',
      name: 'Lucía Peña', role: 'CEO, StartupBA', initials: 'LP', color: '#4ade80' },
    { quote: 'El soporte es excepcional. Respondieron en minutos y resolvieron nuestro problema de integración en una hora.',
      name: 'Rodrigo Méndez', role: 'DevOps Lead, AgriTech', initials: 'RM', color: '#FBBF24' },
    { quote: 'Migrar desde nuestra solución anterior fue más fácil de lo que esperaba. El equipo de onboarding fue de 10.',
      name: 'Camila Ríos', role: 'Product Manager, EduPlatform', initials: 'CR', color: '#38bdf8' },
    { quote: 'La función de roles y permisos es justo lo que necesitábamos para manejar un equipo de 80 personas.',
      name: 'Diego Fernández', role: 'VP Engineering, Retail SaaS', initials: 'DF', color: '#a78bfa' },
  ];

  // Duplicate for infinite scroll effect
  const row1 = [...testimonials, ...testimonials];
  const row2 = [...testimonials.slice(3), ...testimonials.slice(0, 3), ...testimonials.slice(3), ...testimonials.slice(0, 3)];
</script>

<section class="testimonials section" id="testimonials">
  <div class="container">
    <div class="testimonials__header">
      <div>
        <span class="badge">Testimonios</span>
      </div>
      <h2 class="testimonials__title">Lo que dicen nuestros clientes</h2>
      <p class="testimonials__subtitle">+12.000 equipos confían en Nexus cada día</p>
    </div>
  </div>

  <!-- Row 1 -->
  <div class="testimonials__row">
    <div class="testimonials__track">
      {#each row1 as t}
        <article class="testimonial-card">
          <div class="testimonial-card__stars">
            {#each Array(5) as _}
              <span class="testimonial-card__star">★</span>
            {/each}
          </div>
          <p class="testimonial-card__quote">"{t.quote}"</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar" style="background: {t.color}20; color: {t.color};">
              {t.initials}
            </div>
            <div>
              <p class="testimonial-card__name">{t.name}</p>
              <p class="testimonial-card__role">{t.role}</p>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>

  <!-- Row 2 (reverse) -->
  <div class="testimonials__row testimonials__row--2">
    <div class="testimonials__track">
      {#each row2 as t}
        <article class="testimonial-card">
          <div class="testimonial-card__stars">
            {#each Array(5) as _}
              <span class="testimonial-card__star">★</span>
            {/each}
          </div>
          <p class="testimonial-card__quote">"{t.quote}"</p>
          <div class="testimonial-card__author">
            <div class="testimonial-card__avatar" style="background: {t.color}20; color: {t.color};">
              {t.initials}
            </div>
            <div>
              <p class="testimonial-card__name">{t.name}</p>
              <p class="testimonial-card__role">{t.role}</p>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
