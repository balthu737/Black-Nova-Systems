<script>
  import { onMount } from "svelte";
  import { t } from "$lib/stores/lang.js";

  let particles = [];
  let animationId;

  onMount(() => {
    particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: Math.random() > 0.7 ? "#e53e3e" : "#555",
      speedX: (Math.random() - 0.5) * 0.02,
      speedY: (Math.random() - 0.5) * 0.02,
    }));

    function animate() {
      particles = particles.map((p) => ({
        ...p,
        x: (p.x + p.speedX + 100) % 100,
        y: (p.y + p.speedY + 100) % 100,
      }));
      animationId = requestAnimationFrame(animate);
    }
    animate();
    return () => cancelAnimationFrame(animationId);
  });
</script>

<section class="hero">
  <div class="hero-particles" aria-hidden="true">
    {#each particles as p}
      <span
        class="particle"
        style="left:{p.x}%;top:{p.y}%;width:{p.size}px;height:{p.size}px;background:{p.color};"
      >
      </span>
    {/each}
    <img src="/logo_icon.png" alt="Black Nova Systems" class="hero-logo" />
  </div>

  <div class="hero-content">
    <h1>
      {#each $t.hero.title as line, i}
        {line}{#if i < $t.hero.title.length - 1}<br />{/if}
      {/each}
    </h1>
    <p class="hero-sub">{$t.hero.subtitle}</p>
    <div class="hero-actions">
      <button class="btn-primary">{$t.hero.cta}</button>
      <button class="btn-ghost">{$t.hero.secondary}</button>
    </div>
  </div>
</section>

<style>
  .hero {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 5rem 2.5rem 3rem;
  }
  .hero-particles {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .particle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.7;
  }
.hero-logo {
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  width: 42%;
  max-width: 425px;
  opacity: 0.85;
  pointer-events: none;
}
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 600px;
  }
  h1 {
    font-size: clamp(2.8rem, 6vw, 5rem);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
    margin-bottom: 1.2rem;
  }
  .hero-sub {
    color: #aaa;
    font-size: 1.15rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }
  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .btn-primary {
    background: var(--red);
    color: #fff;
    border: none;
    padding: 0.85rem 1.8rem;
    border-radius: var(--radius-btn);
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
  }
  .btn-primary:hover {
    background: var(--red-dark);
  }
  .btn-ghost {
    background: transparent;
    color: #fff;
    border: 1.5px solid #444;
    padding: 0.85rem 1.8rem;
    border-radius: var(--radius-btn);
    font-size: 1rem;
    cursor: pointer;
    transition: border-color 0.2s;
  }
  .btn-ghost:hover {
    border-color: #888;
  }
  @media (max-width: 768px) {
    .hero {
      padding: 6rem 1.2rem 3rem;
    }
    .hero-curve {
      width: 100%;
      opacity: 0.3;
    }
  }
</style>
