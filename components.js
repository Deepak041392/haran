
// Inject NAV
document.getElementById('nav-placeholder').innerHTML = `
<nav id="mainNav">
  <div class="container nav-inner">
    <a href="index.html" class="nav-logo">
      <svg class="nav-logo-icon" viewBox="0 0 40 40" fill="none">
        <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="none" stroke="#00a8ff" stroke-width="1.5"/>
        <polygon points="20,8 32,14.5 32,27.5 20,34 8,27.5 8,14.5" fill="none" stroke="rgba(0,168,255,0.4)" stroke-width="1"/>
        <text x="20" y="25" text-anchor="middle" font-family="Outfit,sans-serif" font-weight="900" font-size="11" fill="white" letter-spacing="-0.5">NF</text>
        <circle cx="20" cy="4" r="2" fill="#ff6b35"/>
        <circle cx="36" cy="13" r="2" fill="#00a8ff"/>
        <circle cx="36" cy="27" r="2" fill="#00a8ff"/>
        <circle cx="20" cy="36" r="2" fill="#ff6b35"/>
        <circle cx="4" cy="27" r="2" fill="#00a8ff"/>
        <circle cx="4" cy="13" r="2" fill="#00a8ff"/>
      </svg>
      <div class="nav-logo-text">
        <span class="brand">Nex<span>Forge</span> 3D</span>
        <span class="tagline-nav">Precision Additive Manufacturing</span>
      </div>
    </a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="portfolio.html">Portfolio</a>
      <a href="about.html">About Us</a>
      <a href="contact.html">Contact</a>
    </div>
    <div class="nav-cta">
      <a href="contact.html" class="btn btn-secondary" style="padding:10px 20px;font-size:.85rem;">Get a Quote</a>
      <div class="nav-hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="services.html">Services</a>
  <a href="portfolio.html">Portfolio</a>
  <a href="about.html">About Us</a>
  <a href="contact.html">Contact</a>
  <a href="contact.html" class="btn btn-primary mobile-cta">Get a Quote</a>
</div>`;

// Inject FOOTER
document.getElementById('footer-placeholder').innerHTML = `
<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo" style="display:inline-flex;margin-bottom:4px;">
          <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
            <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="none" stroke="#00a8ff" stroke-width="1.5"/>
            <text x="20" y="25" text-anchor="middle" font-family="Outfit,sans-serif" font-weight="900" font-size="11" fill="white">NF</text>
            <circle cx="20" cy="4" r="2" fill="#ff6b35"/>
          </svg>
          <div class="nav-logo-text" style="margin-left:10px;">
            <span class="brand">Nex<span>Forge</span> 3D</span>
          </div>
        </a>
        <p>Engineering tomorrow's products today. NexForge 3D delivers precision additive manufacturing solutions for startups, SMEs, and industry leaders across India.</p>
        <div class="footer-social">
          <a href="#" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href="#" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
          </a>
          <a href="#" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12z"/></svg>
          </a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Services</h4>
        <ul>
          <li><a href="services.html#fdm">FDM 3D Printing</a></li>
          <li><a href="services.html#sla">SLA / Resin Printing</a></li>
          <li><a href="services.html#rapid">Rapid Prototyping</a></li>
          <li><a href="services.html#custom">Custom Parts</a></li>
          <li><a href="services.html#design">Design Assistance</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="about.html">About NexForge</a></li>
          <li><a href="portfolio.html">Our Work</a></li>
          <li><a href="about.html#team">Our Team</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div class="footer-col footer-newsletter">
        <h4>Stay Updated</h4>
        <p>Get insights on 3D printing technology, material updates, and project showcases.</p>
        <div class="newsletter-input">
          <input type="email" placeholder="your@email.com" aria-label="Email for newsletter">
          <button type="button">Subscribe</button>
        </div>
        <p style="margin-top:16px;font-size:.78rem;">📍 Plot 42, SIDCO Industrial Estate,<br>Ambattur, Chennai – 600098, Tamil Nadu</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 NexForge 3D Technologies Pvt. Ltd. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Sitemap</a>
      </div>
    </div>
  </div>
</footer>
<a href="https://wa.me/919876543210" class="whatsapp-btn" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
</a>`;
