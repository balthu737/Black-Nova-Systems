<script>
  import { t } from '$lib/stores/lang.js';
</script>

<section class="section-cta" id="contact">
  <h2 class="cta-title">
    {#each $t.cta.title as line, i}
      {line}{#if i < $t.cta.title.length - 1}<br/>{/if}
    {/each}
  </h2>
  <p class="cta-sub">{$t.cta.desc}</p>
  <button class="btn-primary">{$t.cta.btn}</button>
  <div class="cta-badges">
    {#each $t.cta.badges as badge}
      <span><span class="red-dot"></span> {badge}</span>
    {/each}
  </div>
</section>

<style>
  .section-cta {
    text-align: center;
    background: radial-gradient(ellipse at center, #3d0000 0%, #1a0000 40%, #0a0a0a 100%);
    padding: 6rem 2.5rem;
  }
  .cta-title {
    font-size: clamp(2rem, 4vw, 3.2rem);
    font-weight: 800; margin-bottom: 1.2rem;
    letter-spacing: -0.02em; line-height: 1.1;
  }
  .cta-sub { color: var(--text-secondary); max-width: 500px; margin: 0 auto 2.5rem; line-height: 1.6; }
  .btn-primary {
    background: var(--red); color: #fff; border: none;
    padding: 1rem 2.5rem; border-radius: 14px;
    font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: background .2s;
  }
  .btn-primary:hover { background: var(--red-dark); }
  .cta-badges {
    display: flex; justify-content: center; gap: 2rem;
    margin-top: 1.5rem; color: var(--text-secondary); font-size: 0.9rem; flex-wrap: wrap;
  }
  .red-dot {
    display: inline-block; width: 8px; height: 8px;
    border-radius: 50%; background: var(--red);
    margin-right: 0.4rem; vertical-align: middle;
  }
  @media (max-width: 768px) { .section-cta { padding: 4rem 1.2rem; } }
</style>