<script>
  import '../styles/footer.css';

  const year = new Date().getFullYear();

  const cols = [
    {
      title: 'Empresa',
      links: ['Nosotros', 'Blog', 'Carreras', 'Prensa'],
    },
    {
      title: 'Producto',
      links: ['Características', 'Integraciones', 'Precios', 'Changelog'],
    },
    {
      title: 'Contacto',
      links: ['Soporte', 'Ventas', 'Demo', 'Partners'],
    },
    {
      title: 'Legal',
      links: ['Privacidad', 'Términos', 'Cookies', 'Seguridad'],
    },
  ];
</script>

<footer class="footer" id="footer">
  <div class="container">

    <div class="footer-grid">
      <!-- Brand -->
      <div class="footer-brand-col">
        <div class="logo" style="font-size:1rem; margin-bottom:0.75rem">
          <div class="logo-mark" style="width:26px; height:26px">
            <div class="logo-ring" style="width:22px; height:22px"></div>
            <div class="logo-core" style="width:8px;  height:8px"></div>
          </div>
          Black Nova Systems
        </div>
        <p class="footer-brand-text">
          Automatización empresarial e inteligencia de documentos
          para empresas que buscan escalar sin límites.
        </p>
      </div>

      <!-- Link columns -->
      {#each cols as col}
        <div class="footer-col">
          <h4>{col.title}</h4>
          {#each col.links as link}
            <a href="#">{link}</a>
          {/each}
        </div>
      {/each}
    </div>

    <div class="footer-bottom">
      <span class="footer-copy">
        © {year} Black Nova Systems. Todos los derechos reservados.
      </span>
      <div class="footer-legal">
        <a href="#">Privacidad</a>
        <a href="#">Términos</a>
        <a href="#">Cookies</a>
      </div>
    </div>

  </div>
</footer>