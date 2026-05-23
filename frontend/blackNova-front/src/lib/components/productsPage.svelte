<script>
  import '../styles/products.css';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  // ── Datos de ejemplo ──
  const products = [
    {
      id: 1,
      name: 'Nova Extractor Pro',
      category: 'Extracción',
      desc: 'Extracción automática de datos desde PDFs, facturas y formularios escaneados con precisión del 99.8%.',
      price: '$290',
      period: '/mes',
      status: 'active',
      badge: 'Más vendido',
      icon: '⚡',
    },
    {
      id: 2,
      name: 'DocFlow Automator',
      category: 'Flujos',
      desc: 'Automatización de flujos de aprobación de documentos con notificaciones y auditoría completa.',
      price: '$180',
      period: '/mes',
      status: 'active',
      badge: null,
      icon: '🔄',
    },
    {
      id: 3,
      name: 'Vault Secure Storage',
      category: 'Almacenamiento',
      desc: 'Almacenamiento cifrado de documentos empresariales con trazabilidad, versiones y búsqueda inteligente.',
      price: '$120',
      period: '/mes',
      status: 'active',
      badge: null,
      icon: '🔒',
    },
    {
      id: 4,
      name: 'ERP Bridge Connect',
      category: 'Integración',
      desc: 'Conector bidireccional con SAP, Oracle y Salesforce. Sincronización en tiempo real sin código.',
      price: '$340',
      period: '/mes',
      status: 'beta',
      badge: 'Beta',
      icon: '🔗',
    },
    {
      id: 5,
      name: 'Nova Analytics',
      category: 'Analíticas',
      desc: 'Dashboard de métricas operativas con reportes automáticos, alertas y exportación a Excel/PDF.',
      price: '$95',
      period: '/mes',
      status: 'active',
      badge: 'Nuevo',
      icon: '📊',
    },
    {
      id: 6,
      name: 'OCR Engine Enterprise',
      category: 'Extracción',
      desc: 'Motor OCR de alta velocidad para procesamiento masivo de documentos físicos. Hasta 50.000 pág/día.',
      price: '$480',
      period: '/mes',
      status: 'enterprise',
      badge: 'Enterprise',
      icon: '🤖',
    },
  ];

  // ── Filtros ──
  const categories = ['Todos', 'Extracción', 'Flujos', 'Almacenamiento', 'Integración', 'Analíticas'];
  let activeCategory = 'Todos';
  let search = '';
  let view = 'grid'; // 'grid' | 'list'

  /*
    Svelte reactivity: la variable $: recalcula automáticamente
    cada vez que activeCategory o search cambian.
    Es equivalente a un computed/memo en otros frameworks.
  */
  $: filtered = products.filter(p => {
    const matchCat  = activeCategory === 'Todos' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) ||
                        p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  // Badge styles por tipo
  const badgeClass = {
    'Más vendido': 'badge--red',
    'Nuevo':       'badge--green',
    'Beta':        'badge--yellow',
    'Enterprise':  'badge--purple',
  };

  const statusLabel = {
    active:     { label: 'Activo',     cls: 'status--active'     },
    beta:       { label: 'Beta',       cls: 'status--beta'       },
    enterprise: { label: 'Enterprise', cls: 'status--enterprise' },
  };
</script>

<div class="prod-page">

  <!-- ── Sidebar ── -->
  <aside class="prod-sidebar">
    <!-- Logo -->
    <button
      class="prod-logo"
      on:click={() => dispatch('navigate', 'home')}
    >
      <div class="logo-mark" style="width:28px; height:28px;">
        <div class="logo-ring" style="width:24px; height:24px;"></div>
        <div class="logo-core" style="width:8px;  height:8px;"></div>
      </div>
      <span>Black Nova</span>
    </button>

    <!-- Nav del sidebar -->
    <nav class="prod-sidenav">
      <div class="sidenav-section-label">Panel</div>
      <button class="sidenav-item">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="1" y="1" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.25"/>
          <rect x="9" y="1" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.25"/>
          <rect x="1" y="9" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.25"/>
          <rect x="9" y="9" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.25"/>
        </svg>
        Dashboard
      </button>
      <button class="sidenav-item sidenav-item--active">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
        </svg>
        Productos
      </button>
      <button class="sidenav-item">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
        </svg>
        Integraciones
      </button>
      <button class="sidenav-item">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="7" stroke="currentColor" stroke-width="1.25"/>
          <path d="M8 5v3l2 2" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
        </svg>
        Historial
      </button>

      <div class="sidenav-section-label" style="margin-top:1.5rem">Cuenta</div>
      <button class="sidenav-item">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="5" r="3" stroke="currentColor" stroke-width="1.25"/>
          <path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
        </svg>
        Perfil
      </button>
      <button class="sidenav-item">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6.5 2H3a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V9.5M9 2h5v5M14 2L7 9" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Configuración
      </button>
    </nav>

    <!-- User info en el fondo del sidebar -->
    <div class="prod-sidebar-user">
      <div class="sidebar-avatar">SK</div>
      <div class="sidebar-user-info">
        <p class="sidebar-user-name">Skynet Admin</p>
        <p class="sidebar-user-role">Administrador</p>
      </div>
      <button
        class="sidebar-logout"
        on:click={() => dispatch('navigate', 'login')}
        title="Cerrar sesión"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 2H3a1 1 0 00-1 1v8a1 1 0 001 1h2M10 10l3-3-3-3M13 7H5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  </aside>

  <!-- ── Contenido principal ── -->
  <main class="prod-main">

    <!-- Topbar -->
    <div class="prod-topbar">
      <div>
        <h1 class="prod-title">Productos</h1>
        <p class="prod-subtitle">Gestioná y explorá el catálogo de soluciones.</p>
      </div>
      <button class="btn-red" style="font-size:0.875rem; padding:0.6rem 1.25rem;">
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path d="M6.5 1v11M1 6.5h11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        Nuevo producto
      </button>
    </div>

    <!-- Stats rápidas -->
    <div class="prod-stats">
      {#each [
        { label: 'Total productos', value: products.length, icon: '📦' },
        { label: 'Activos',         value: products.filter(p=>p.status==='active').length, icon: '✅' },
        { label: 'Ingresos / mes',  value: '$1.505', icon: '💰' },
        { label: 'Clientes usando', value: '248', icon: '👥' },
      ] as stat}
        <div class="prod-stat-card">
          <span class="prod-stat-icon">{stat.icon}</span>
          <div>
            <p class="prod-stat-val">{stat.value}</p>
            <p class="prod-stat-lbl">{stat.label}</p>
          </div>
        </div>
      {/each}
    </div>

    <!-- Toolbar: search + filtros + vista -->
    <div class="prod-toolbar">
      <!-- Buscador -->
      <div class="prod-search-wrap">
        <svg class="prod-search-icon" width="15" height="15" viewBox="0 0 15 15" fill="none">
          <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" stroke-width="1.25"/>
          <path d="M10.5 10.5l3 3" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
        </svg>
        <input
          class="prod-search"
          type="text"
          placeholder="Buscar productos..."
          bind:value={search}
        />
      </div>

      <!-- Filtros por categoría -->
      <div class="prod-filters">
        {#each categories as cat}
          <button
            class="prod-filter-btn"
            class:active={activeCategory === cat}
            on:click={() => activeCategory = cat}
          >
            {cat}
          </button>
        {/each}
      </div>

      <!-- Toggle de vista grid/lista -->
      <div class="prod-view-toggle">
        <button
          class="view-btn"
          class:active={view === 'grid'}
          on:click={() => view = 'grid'}
          title="Vista grilla"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.25"/>
            <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.25"/>
            <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.25"/>
            <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" stroke-width="1.25"/>
          </svg>
        </button>
        <button
          class="view-btn"
          class:active={view === 'list'}
          on:click={() => view = 'list'}
          title="Vista lista"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 3h12M1 7h12M1 11h12" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Contador de resultados -->
    <p class="prod-results-count">
      {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
      {activeCategory !== 'Todos' ? `en "${activeCategory}"` : ''}
      {search ? `para "${search}"` : ''}
    </p>

    <!-- Grid / Lista de productos -->
    {#if filtered.length === 0}
      <div class="prod-empty">
        <span style="font-size:2.5rem">🔍</span>
        <p>No se encontraron productos.</p>
        <button
          class="btn-outline"
          style="margin-top:1rem; font-size:0.875rem;"
          on:click={() => { search = ''; activeCategory = 'Todos'; }}
        >
          Limpiar filtros
        </button>
      </div>

    {:else if view === 'grid'}
      <div class="prod-grid">
        {#each filtered as product (product.id)}
          <div class="prod-card">
            <!-- Badge -->
            {#if product.badge}
              <span class="prod-badge {badgeClass[product.badge] || ''}">
                {product.badge}
              </span>
            {/if}

            <!-- Header de la card -->
            <div class="prod-card-header">
              <div class="prod-card-icon">{product.icon}</div>
              <span class="prod-status {statusLabel[product.status].cls}">
                {statusLabel[product.status].label}
              </span>
            </div>

            <h3 class="prod-card-name">{product.name}</h3>
            <span class="prod-card-cat">{product.category}</span>
            <p class="prod-card-desc">{product.desc}</p>

            <div class="prod-card-footer">
              <div class="prod-card-price">
                <span class="price-amount">{product.price}</span>
                <span class="price-period">{product.period}</span>
              </div>
              <div class="prod-card-actions">
                <button class="prod-action-btn" title="Ver detalles">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <circle cx="6.5" cy="6.5" r="2" stroke="currentColor" stroke-width="1.25"/>
                    <path d="M1 6.5C2.2 4 4.2 2.5 6.5 2.5S10.8 4 12 6.5C10.8 9 8.8 10.5 6.5 10.5S2.2 9 1 6.5z" stroke="currentColor" stroke-width="1.25"/>
                  </svg>
                </button>
                <button class="prod-action-btn" title="Editar">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M9 2l2 2-7 7H2V9l7-7z" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round"/>
                  </svg>
                </button>
                <button class="btn-red" style="padding:0.4rem 0.9rem; font-size:0.78rem;">
                  Activar
                </button>
              </div>
            </div>
          </div>
        {/each}
      </div>

    {:else}
      <!-- Vista lista -->
      <div class="prod-list">
        <!-- Header de la tabla -->
        <div class="prod-list-header">
          <span>Producto</span>
          <span>Categoría</span>
          <span>Estado</span>
          <span>Precio</span>
          <span>Acciones</span>
        </div>
        {#each filtered as product (product.id)}
          <div class="prod-list-row">
            <div class="prod-list-name">
              <span class="prod-list-icon">{product.icon}</span>
              <div>
                <p class="prod-list-title">{product.name}</p>
                <p class="prod-list-desc">{product.desc.slice(0, 60)}...</p>
              </div>
            </div>
            <span class="prod-list-cat">{product.category}</span>
            <span class="prod-status {statusLabel[product.status].cls}">
              {statusLabel[product.status].label}
            </span>
            <span class="prod-list-price">{product.price}<span style="color:var(--text-dim);font-size:0.75rem">{product.period}</span></span>
            <div class="prod-list-actions">
              <button class="prod-action-btn" title="Ver">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="2" stroke="currentColor" stroke-width="1.25"/>
                  <path d="M1 6.5C2.2 4 4.2 2.5 6.5 2.5S10.8 4 12 6.5C10.8 9 8.8 10.5 6.5 10.5S2.2 9 1 6.5z" stroke="currentColor" stroke-width="1.25"/>
                </svg>
              </button>
              <button class="prod-action-btn" title="Editar">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M9 2l2 2-7 7H2V9l7-7z" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round"/>
                </svg>
              </button>
              <button class="prod-action-btn prod-action-btn--danger" title="Eliminar">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 3.5h9M5 3.5V2.5h3v1M10.5 3.5l-.7 7a1 1 0 01-1 .9H4.2a1 1 0 01-1-.9l-.7-7" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>
        {/each}
      </div>
    {/if}

  </main>
</div>