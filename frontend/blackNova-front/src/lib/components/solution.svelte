<script>
  import '../styles/solution.css';

  const points = [
    'Extracción automática de datos desde documentos físicos y digitales',
    'Almacenamiento seguro con cifrado y trazabilidad completa',
    'Integración nativa con sistemas empresariales existentes (ERP, CRM)',
    'Reducción drástica de errores y aceleración de flujos de aprobación',
    'Reportes y métricas en tiempo real para toma de decisiones',
  ];

  const docs = [
    { name: 'factura_proveedor_0824.pdf', status: 'Procesado', ok: true },
    { name: 'contrato_cliente_nuevo.docx', status: 'En proceso', ok: false },
    { name: 'remito_lote_2847.pdf',        status: 'Procesado', ok: true },
  ];

  // Alturas de las barras del chart (porcentaje)
  const bars = [55, 70, 60, 88, 75, 92, 100];
</script>

<section class="section solution" id="solution">
  <div class="container">

    <div class="section-label">La Solución</div>
    <h2 class="section-title">Automatización inteligente para tu empresa</h2>

    <div class="sol-grid">

      <!-- Columna izquierda: texto + bullets -->
      <div>
        <p class="sol-intro">
          Nuestro sistema de digitalización y automatización reemplaza los
          procesos manuales con flujos inteligentes que operan solos —
          rápido, preciso y sin interrupciones.
        </p>
        <div class="sol-points">
          {#each points as point}
            <div class="sol-point">
              <div class="sol-check">✓</div>
              <span>{point}</span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Columna derecha: dashboard mockup -->
      <div class="dashboard">
        <div class="dash-bar">
          <div class="dash-dot" style="background:#FF5F57"></div>
          <div class="dash-dot" style="background:#FFBD2E"></div>
          <div class="dash-dot" style="background:#28C840"></div>
          <span class="dash-title">Black Nova · Panel de Control</span>
        </div>
        <div class="dash-body">

          <div class="dash-metrics">
            <div class="dash-metric">
              <div class="dash-metric-label">Docs procesados</div>
              <div class="dash-metric-val">12.847</div>
            </div>
            <div class="dash-metric">
              <div class="dash-metric-label">Tasa de error</div>
              <div class="dash-metric-val green">0.02%</div>
            </div>
            <div class="dash-metric">
              <div class="dash-metric-label">Ahorro / mes</div>
              <div class="dash-metric-val red">$9.4k</div>
            </div>
          </div>

          <div class="dash-chart">
            <div class="dash-chart-label">Documentos automatizados — últimos 7 días</div>
            <div class="chart-bars">
              {#each bars as height}
                <div class="chart-bar" style="height:{height}%; opacity:{0.3 + height/200}"></div>
              {/each}
            </div>
          </div>

          <div class="dash-docs">
            {#each docs as doc}
              <div class="dash-doc">
                <span class="dash-doc-name">{doc.name}</span>
                <span class="dash-doc-status" class:status-ok={doc.ok} class:status-proc={!doc.ok}>
                  {doc.status}
                </span>
              </div>
            {/each}
          </div>

        </div>
      </div>

    </div>
  </div>
</section>