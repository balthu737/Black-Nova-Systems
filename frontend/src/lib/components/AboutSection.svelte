<script>
  import { t } from '$lib/stores/lang.js';
</script>

<section class="section" id="about">
  <div class="about-badge">{$t.about.badge}</div>
  <h2 class="section-title">{$t.about.title}</h2>
  <p class="about-desc">{$t.about.desc}</p>
  <div class="stats-row">
    {#each $t.about.stats as s}
      <div class="stat-item">
        <span class="stat-value">{s.value}</span>
        <span class="stat-label">{s.label}</span>
      </div>
    {/each}
  </div>
</section>

<style>
  .section { padding: 5rem 2.5rem; max-width: 1200px; margin: 0 auto; text-align: center; }
  .about-badge {
    display: inline-flex; align-items: center; gap: 0.5rem;
    background: rgba(229,62,62,0.15); border: 1px solid rgba(229,62,62,0.3);
    color: var(--red); padding: 0.4rem 1rem; border-radius: 100px;
    font-size: 0.85rem; font-weight: 600; margin-bottom: 1.5rem;
  }
  .section-title {
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800; margin-bottom: 1.5rem; letter-spacing: -0.02em;
  }
  .about-desc { color: var(--text-secondary); max-width: 700px; margin: 0 auto 3rem; line-height: 1.75; font-size: 1rem; }
  .stats-row { display: flex; justify-content: center; gap: 4rem; flex-wrap: wrap; }
  .stat-item { text-align: center; }
  .stat-value { display: block; font-size: 2.8rem; font-weight: 800; color: var(--red); }
  .stat-label { display: block; color: var(--text-muted); font-size: 0.9rem; margin-top: 0.3rem; }
  @media (max-width: 768px) {
    .section { padding: 3rem 1.2rem; }
    .stats-row { gap: 2rem; }
  }
</style>