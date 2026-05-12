<script>
  import '../styles/footer.css';

  const year = new Date().getFullYear();

  const cols = [
    {
      title: 'Producto',
      links: ['Características', 'Precios', 'Changelog', 'Roadmap', 'Status'],
    },
    {
      title: 'Empresa',
      links: ['Sobre nosotros', 'Blog', 'Prensa', 'Carreras', 'Contacto'],
    },
    {
      title: 'Soporte',
      links: ['Documentación', 'API Reference', 'Comunidad', 'Tutoriales', 'Centro de ayuda'],
    },
  ];

  const socials = [
    { icon: '𝕏', href: '#' },
    { icon: 'in', href: '#' },
    { icon: 'gh', href: '#' },
  ];
</script>

<footer class="footer">
  <div class="container">
    <!-- CTA banner -->
    <div class="footer__cta">
      <h2 class="footer__cta-title">¿Listo para escalar tu negocio?</h2>
      <p class="footer__cta-desc">
        Unite a más de 12.000 equipos que ya usan Nexus. Empezá gratis hoy.
      </p>
      <div class="footer__cta-actions">
        <a href="#signup" class="btn btn-primary">Empezar gratis</a>
        <a href="#demo"   class="btn btn-outline">Reservar demo</a>
      </div>
    </div>

    <!-- Footer grid -->
    <div class="footer__grid">
      <!-- Brand -->
      <div class="footer__brand">
        <div class="navbar__logo" style="margin-bottom: 12px;">
          <div class="navbar__logo-icon" style="width:32px;height:32px;">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
              <path d="M9 1L16 5V13L9 17L2 13V5L9 1Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
              <circle cx="9" cy="9" r="2.5" fill="white"/>
            </svg>
          </div>
          Nexus
        </div>
        <p>La plataforma que potencia a equipos modernos con automatización, analíticas y colaboración en un solo lugar.</p>
        <div class="footer__social">
          {#each socials as s}
            <a href={s.href} class="footer__social-link" aria-label={s.icon}>{s.icon}</a>
          {/each}
        </div>
      </div>

      <!-- Link columns -->
      {#each cols as col}
        <div>
          <p class="footer__col-title">{col.title}</p>
          <ul class="footer__links">
            {#each col.links as link}
              <li><a href="#" class="footer__link">{link}</a></li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Bottom bar -->
    <div class="footer__bottom">
      <p class="footer__copyright">© {year} Nexus, Inc. Todos los derechos reservados.</p>
      <div class="footer__legal">
        <a href="#">Privacidad</a>
        <a href="#">Términos</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </div>
</footer>
