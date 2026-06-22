<script>
  import { t } from '$lib/stores/lang.js';
</script>

<footer class="footer">
<div class="footer-brand">
  <img src="/logo_icon.png" alt="Black Nova Systems" class="logo-img" />
</div>
  <p class="footer-copy">{$t.footer.copy}</p>
    <div class="footer-social">
   <a href="https://www.instagram.com/black_nova_systems/" target="_blank" rel="noopener" class="instagram-link">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
  @black_nova_systems
</a>
  </div>
</footer>

<style>
  .footer {
    padding: 2rem 2.5rem; border-top: 1px solid #1a1a1a;
    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;
  }
  .footer-brand { display: flex; align-items: center; gap: 0.6rem; }
.logo-img {
  height: 32px;
  width: auto;
  object-fit: contain;
}
  .brand-name { font-weight: 700; font-size: 1.05rem; letter-spacing: -0.01em; }
  .footer-copy { color: #555; font-size: 0.85rem; }
  @media (max-width: 768px) {
    .footer { flex-direction: column; align-items: flex-start; padding: 2rem 1.2rem; }
  }
.footer-social {
  display: flex;
  align-items: center;
}

.instagram-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #888;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.instagram-link:hover {
  color: #e53e3e;
}
</style>