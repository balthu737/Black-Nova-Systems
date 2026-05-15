<script>
  import '../styles/hero.css';
</script>

<section class="hero" id="home">

  <!-- Starfield SVG de fondo -->
  <svg class="hero-bg" viewBox="0 0 1100 700" preserveAspectRatio="xMidYMid slice">
    <circle cx="80"  cy="60"  r="1"   fill="rgba(255,255,255,0.4)"/>
    <circle cx="200" cy="140" r="0.7" fill="rgba(255,255,255,0.3)"/>
    <circle cx="340" cy="30"  r="1.2" fill="rgba(255,255,255,0.5)"/>
    <circle cx="500" cy="90"  r="0.8" fill="rgba(255,255,255,0.3)"/>
    <circle cx="650" cy="20"  r="1"   fill="rgba(255,255,255,0.4)"/>
    <circle cx="820" cy="70"  r="0.6" fill="rgba(255,255,255,0.25)"/>
    <circle cx="960" cy="110" r="1.1" fill="rgba(255,255,255,0.35)"/>
    <circle cx="120" cy="250" r="0.7" fill="rgba(255,255,255,0.2)"/>
    <circle cx="290" cy="320" r="1"   fill="rgba(255,255,255,0.35)"/>
    <circle cx="750" cy="180" r="0.8" fill="rgba(255,255,255,0.3)"/>
    <circle cx="900" cy="260" r="1"   fill="rgba(255,255,255,0.25)"/>
    <circle cx="380" cy="480" r="0.6" fill="rgba(255,255,255,0.15)"/>
    <circle cx="600" cy="550" r="1"   fill="rgba(255,255,255,0.2)"/>
  </svg>

  <div class="container">
    <div class="hero-inner">

      <!-- Columna de texto -->
      <div class="hero-text">
        <div class="eyebrow">
          <span class="eyebrow-dot"></span>
          Automatización Empresarial Avanzada
        </div>

        <h1>
          Automatizá los procesos<br>
          de <span class="accent">tu empresa</span>
        </h1>

        <p class="hero-sub">
          Transformamos el trabajo manual en sistemas automatizados
          inteligentes. Digitalización de documentos, extracción de
          datos y flujos de trabajo sin errores.
        </p>

        <div class="hero-btns">
          <button class="btn-red">
            Solicitar Demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
                stroke="currentColor" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button class="btn-outline">Ver cómo funciona →</button>
        </div>

        <div class="hero-trust">
          <div>
            <div class="trust-stat-num">+200</div>
            <div class="trust-stat-lbl">Empresas automatizadas</div>
          </div>
          <div class="trust-divider"></div>
          <div>
            <div class="trust-stat-num">98%</div>
            <div class="trust-stat-lbl">Reducción de errores</div>
          </div>
          <div class="trust-divider"></div>
          <div>
            <div class="trust-stat-num">5M+</div>
            <div class="trust-stat-lbl">Documentos procesados</div>
          </div>
        </div>
      </div>

      <!-- Columna visual: agujero negro SVG -->
      <div class="hero-visual">
        <div class="blackhole-wrap">
          <svg viewBox="0 0 420 420" width="420" height="420" style="overflow:visible">
            <defs>
              <radialGradient id="bh-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stop-color="#FF2A2A" stop-opacity="0.18"/>
                <stop offset="40%"  stop-color="#FF2A2A" stop-opacity="0.06"/>
                <stop offset="100%" stop-color="#FF2A2A" stop-opacity="0"/>
              </radialGradient>
              <radialGradient id="disc-grad" cx="50%" cy="35%" r="65%">
                <stop offset="0%"   stop-color="#FF5A2A" stop-opacity="0.9"/>
                <stop offset="40%"  stop-color="#FF2A2A" stop-opacity="0.6"/>
                <stop offset="100%" stop-color="#8B0000" stop-opacity="0.1"/>
              </radialGradient>
            </defs>

            <!-- Glow ambiental -->
            <circle cx="210" cy="210" r="180" fill="url(#bh-glow)"/>

            <!-- Disco de acreción — anillos elípticos -->
            <ellipse cx="210" cy="210" rx="165" ry="45" fill="none" stroke="#FF2A2A" stroke-width="1"   stroke-opacity="0.08"/>
            <ellipse cx="210" cy="210" rx="145" ry="38" fill="none" stroke="#FF2A2A" stroke-width="1.5" stroke-opacity="0.12"/>
            <ellipse cx="210" cy="210" rx="122" ry="30" fill="none" stroke="#FF3A2A" stroke-width="2"   stroke-opacity="0.18"/>
            <ellipse cx="210" cy="210" rx="100" ry="24" fill="none" stroke="#FF2A2A" stroke-width="2.5" stroke-opacity="0.28"/>

            <!-- Mitad superior del disco (frente) -->
            <path d="M 70 210 A 140 38 0 0 1 350 210" fill="url(#disc-grad)" opacity="0.55"/>
            <!-- Mitad inferior (detrás) -->
            <path d="M 70 210 A 140 38 0 0 0 350 210" fill="#FF2A2A" opacity="0.05"/>

            <!-- Anillos interiores brillantes -->
            <ellipse cx="210" cy="210" rx="80" ry="18" fill="none" stroke="#FF4A2A" stroke-width="3" stroke-opacity="0.45"/>
            <ellipse cx="210" cy="210" rx="62" ry="13" fill="none" stroke="#FF2A2A" stroke-width="4" stroke-opacity="0.6"/>

            <!-- Streams de energía -->
            <path d="M 360 120 Q 310 160 260 195" fill="none" stroke="#FF2A2A" stroke-width="1.5" stroke-opacity="0.6" stroke-linecap="round"/>
            <path d="M 390 220 Q 340 215 280 210" fill="none" stroke="#FF2A2A" stroke-width="2"   stroke-opacity="0.55" stroke-linecap="round"/>
            <path d="M 355 310 Q 305 270 260 225" fill="none" stroke="#FF2A2A" stroke-width="1.25" stroke-opacity="0.5" stroke-linecap="round"/>
            <path d="M 60  140 Q 110 170 160 196" fill="none" stroke="#FF2A2A" stroke-width="1"   stroke-opacity="0.4" stroke-linecap="round"/>
            <path d="M 30  205 Q 90  208 160 209" fill="none" stroke="#FF2A2A" stroke-width="1.5" stroke-opacity="0.5" stroke-linecap="round"/>

            <!-- Partículas sobre los streams -->
            <circle cx="340" cy="135" r="2.5" fill="#FF2A2A" opacity="0.8"/>
            <circle cx="375" cy="220" r="3"   fill="#FF2A2A" opacity="0.9"/>
            <circle cx="340" cy="295" r="2"   fill="#FF2A2A" opacity="0.6"/>
            <circle cx="55"  cy="205" r="2.2" fill="#FF2A2A" opacity="0.7"/>

            <!-- Horizonte de eventos (núcleo) -->
            <circle cx="210" cy="210" r="58" fill="#0B0B0B"/>
            <circle cx="210" cy="210" r="58" fill="none" stroke="#FF2A2A" stroke-width="1"   stroke-opacity="0.7"/>
            <circle cx="210" cy="210" r="52" fill="none" stroke="#FF2A2A" stroke-width="2.5" stroke-opacity="0.4"/>
            <circle cx="210" cy="210" r="46" fill="#0B0B0B"/>
          </svg>
        </div>
      </div>

    </div>
  </div>
</section>