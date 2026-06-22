<script>
  import { t } from '$lib/stores/lang.js';
</script>

<section class="section" id="solutions">
  <h2 class="section-title">{$t.problem.title}</h2>
  <div class="cards-grid">
    {#each $t.problem.items as item}
      <div class="card">
        <div class="card-icon">{item.icon}</div>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
    {/each}
  </div>
</section>

<style>
  .section { padding: 5rem 2.5rem; max-width: 1200px; margin: 0 auto; }
  .section-title {
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800; text-align: center; margin-bottom: 3rem; letter-spacing: -0.02em;
  }
  .cards-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; }
  .card { background: var(--bg-card-dark); border: 1px solid var(--border); border-radius: var(--radius-card); padding: 1.8rem; }
  .card-icon {
    width: 52px; height: 52px; border-radius: 12px;
    background: rgba(229,62,62,0.2);
    display: flex; align-items: center; justify-content: center;
    font-size: 1.3rem; margin-bottom: 1rem;
  }
  h3 { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
  p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }
  @media (max-width: 768px) { .section { padding: 3rem 1.2rem; } }
</style>