<script>
  import { t } from "$lib/stores/lang.js";
</script>

<section class="section" id="product">
  <h2 class="section-title">{$t.solution.title}</h2>

  <div class="solution-layout">
    <div class="solution-text">
      <p class="solution-desc">{$t.solution.desc}</p>
      <ul class="check-list">
        {#each $t.solution.checklist as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>

    <div class="dashboard-card">
      <div class="dashboard-dots">
        <span class="dot dot-red"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dashboard-label">{$t.solution.dashboard.label}</span>
      </div>

      <div class="dashboard-stats">
        <div class="dash-stat">
          <span class="dash-label">{$t.solution.dashboard.docs.label}</span>
          <span class="dash-value">{$t.solution.dashboard.docs.value}</span>
          <span class="dash-change">{$t.solution.dashboard.docs.change}</span>
        </div>
        <div class="dash-stat">
          <span class="dash-label">{$t.solution.dashboard.time.label}</span>
          <span class="dash-value">{$t.solution.dashboard.time.value}</span>
          <span class="dash-change">{$t.solution.dashboard.time.change}</span>
        </div>
      </div>

      <div class="recent-activity">
        <p class="activity-title">{$t.solution.dashboard.activity}</p>
        {#each $t.solution.dashboard.recentDocs as doc}
          <div class="activity-row">
            <span class="activity-dot"></span>
            <span class="activity-name">
              Document {doc.id} processed<br />
              <small>{doc.time}</small>
            </span>
            <span class="activity-status">{$t.solution.dashboard.status}</span>
          </div>
        {/each}
      </div>

      <div class="progress-section">
        <div class="progress-header">
          <span>{$t.solution.dashboard.progress}</span>
          <span>87%</span>
        </div>
        <div class="progress-bar">
          <div class="progress-fill" style="width:87%"></div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .section {
    padding: 5rem 2.5rem;
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
  .solution-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }
  .solution-desc {
    color: #bbb;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
  .check-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .check-list li {
    padding-left: 1.8rem;
    position: relative;
    color: #ccc;
    font-size: 0.95rem;
  }
  .check-list li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--red);
    font-weight: 700;
  }
  .dashboard-card {
    background: #111;
    border: 1px solid var(--border);
    border-radius: var(--radius-card);
    padding: 1.5rem;
    font-size: 0.9rem;
  }
  .dashboard-dots {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.2rem;
  }
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #333;
  }
  .dot-red {
    background: var(--red);
  }
  .dashboard-label {
    margin-left: auto;
    color: #666;
    font-size: 0.85rem;
  }
  .dashboard-stats {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1.2rem;
  }
  .dash-stat {
    background: #0d0d0d;
    border: 1px solid #1e1e1e;
    border-radius: 10px;
    padding: 1rem;
  }
  .dash-label {
    display: block;
    color: #888;
    font-size: 0.8rem;
    margin-bottom: 0.3rem;
  }
  .dash-value {
    display: block;
    font-size: 1.8rem;
    font-weight: 700;
  }
  .dash-change {
    display: block;
    color: var(--red);
    font-size: 0.78rem;
    margin-top: 0.2rem;
  }
  .recent-activity {
    margin-bottom: 1.2rem;
  }
  .activity-title {
    color: #888;
    font-size: 0.82rem;
    margin-bottom: 0.8rem;
  }
  .activity-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.6rem 0;
    border-bottom: 1px solid #1a1a1a;
  }
  .activity-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--red);
    flex-shrink: 0;
  }
  .activity-name {
    flex: 1;
    font-size: 0.85rem;
    line-height: 1.4;
  }
  .activity-name small {
    color: #666;
    font-size: 0.78rem;
  }
  .activity-status {
    color: var(--red);
    font-size: 0.82rem;
  }
  .progress-section {
    margin-top: 1rem;
  }
  .progress-header {
    display: flex;
    justify-content: space-between;
    color: #888;
    font-size: 0.82rem;
    margin-bottom: 0.4rem;
  }
  .progress-bar {
    background: #1e1e1e;
    border-radius: 100px;
    height: 6px;
  }
  .progress-fill {
    background: var(--red);
    height: 100%;
    border-radius: 100px;
  }
  @media (max-width: 768px) {
    .section {
      padding: 3rem 1.2rem;
    }
    .solution-layout {
      grid-template-columns: 1fr;
    }
  }
</style>
