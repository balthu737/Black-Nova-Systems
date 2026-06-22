<script>
  import { t } from "$lib/stores/lang.js";
</script>

<section class="section-why">
  <div class="inner">
    <h2 class="section-title">{$t.why.title}</h2>
    <div class="cards-grid">
      {#each $t.why.items as f}
        <div class="card">
          <div class="card-icon">{f.icon}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .section-why {
    background: #080808;
    padding: 5rem 2.5rem;
  }
  .inner {
    max-width: 1200px;
    margin: 0 auto;
  }
  .section-title {
    font-size: clamp(1.8rem, 3.5vw, 2.8rem);
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;
    letter-spacing: -0.02em;
  }
  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
  }
  .card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 1.8rem;
  }
  .card-icon {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    background: linear-gradient(135deg, var(--red), var(--red-deeper));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  p {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
  }
  @media (max-width: 768px) {
    .section-why {
      padding: 3rem 1.2rem;
    }
  }
</style>
