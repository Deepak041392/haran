
// Inject NAV
document.getElementById('nav-placeholder').innerHTML = `
<nav id="mainNav">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="logo.png" alt="Phalin3D Labs Logo" style="height:52px;width:auto;object-fit:contain;">
    </a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="portfolio.html">Products</a>
      <a href="services.html">Services</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="nav-cta">
      <a href="contact.html" class="btn btn-gold" style="padding:10px 22px;font-size:.85rem;">Get a Quote</a>
      <div class="nav-hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="portfolio.html">Products</a>
  <a href="services.html">Services</a>
  <a href="about.html">About Us</a>
  <a href="contact.html">Contact</a>
  <a href="contact.html" class="btn btn-gold mobile-cta" style="text-align:center;justify-content:center;margin-top:8px;">Get a Quote</a>
</div>`;

// Inject FOOTER
document.getElementById('footer-placeholder').innerHTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" style="display:inline-block;margin-bottom:8px;">
          <img src="logo.png" alt="Phalin3D Labs" style="height:52px;width:auto;filter:brightness(0) invert(1);opacity:0.9;">
        </a>
        <p>Delivering innovative additive manufacturing solutions through high-performance 3D printing materials, industrial printing services, and reliable 3D printing systems across India.</p>
        <div class="footer-social">
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" aria-label="Twitter/X">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Products</h4>
        <ul>
          <li><a href="portfolio.html#fdm-filaments">FDM Filaments</a></li>
          <li><a href="portfolio.html#sla-resins">SLA &amp; DLP Resins</a></li>
          <li><a href="portfolio.html#metal-ceramic">Metal &amp; Ceramic Filaments</a></li>
          <li><a href="portfolio.html#engineering-grade">Engineering Grade Materials</a></li>
          <li><a href="portfolio.html#printers">3D Printing Systems</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="services.html#fdm">FDM Printing</a></li>
          <li><a href="services.html#sla">SLA Printing</a></li>
          <li><a href="services.html#sls">SLS Printing</a></li>
          <li><a href="services.html#mjf">MJF Printing</a></li>
          <li><a href="services.html#dmls">DMLS Metal Printing</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Contact Us</h4>
        <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:20px;">
          <div style="display:flex;align-items:flex-start;gap:10px;font-size:.87rem;color:rgba(255,255,255,0.6);">
            <svg viewBox="0 0 24 24" fill="none" stroke="#f5a800" stroke-width="2" width="16" height="16" style="flex-shrink:0;margin-top:2px;"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.14 13.5 19.79 19.79 0 011.07 4.88 2 2 0 013.05 2.7h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            +91 XXXXXXXXXX
          </div>
          <div style="display:flex;align-items:flex-start;gap:10px;font-size:.87rem;color:rgba(255,255,255,0.6);">
            <svg viewBox="0 0 24 24" fill="none" stroke="#f5a800" stroke-width="2" width="16" height="16" style="flex-shrink:0;margin-top:2px;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            phalin3dlabs@gmail.com
          </div>
          <div style="display:flex;align-items:flex-start;gap:10px;font-size:.87rem;color:rgba(255,255,255,0.6);">
            <svg viewBox="0 0 24 24" fill="none" stroke="#f5a800" stroke-width="2" width="16" height="16" style="flex-shrink:0;margin-top:2px;"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            <span>No : 1/250, Rajarathinam Street,<br>Singara Thottam, Vandalur,<br>Chennai – 600048</span>
          </div>
        </div>
        <a href="contact.html" class="btn btn-gold" style="padding:10px 20px;font-size:.85rem;">Request Consultation</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Phalin3D Labs. All rights reserved. | Advanced Additive Manufacturing Solutions, Chennai, India</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="contact.html">Contact</a>
      </div>
    </div>
  </div>
</footer>
<a href="https://wa.me/91XXXXXXXXXX" class="whatsapp-btn" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;
