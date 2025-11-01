class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          footer {
            background: linear-gradient(135deg, #1D3557 0%, #457B9D 100%);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
            margin-top: auto;
          }
          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            text-align: left;
          }
          .footer-section h3 {
            font-size: 1.25rem;
            margin-bottom: 1rem;
            font-weight: 600;
          }
          .footer-section p, .footer-section a {
            color: rgba(255,255,255,0.7);
            margin-bottom: 0.5rem;
            display: block;
          }
          .footer-section a:hover {
            color: white;
          }
          .social-icons {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
          }
          .social-icons a {
            color: white;
            font-size: 1.5rem;
          }
          .copyright {
            margin-top: 2rem;
            padding-top: 1rem;
            border-top: 1px solid rgba(255,255,255,0.1);
          }
          @media (max-width: 768px) {
            .footer-content {
              grid-template-columns: 1fr;
            }
          }
        </style>
        <footer>
          <div class="footer-content">
            <div class="footer-section">
              <h3>About Azerbaijan</h3>
              <p>The Land of Fire where East meets West, offering rich culture, delicious cuisine, and breathtaking landscapes.</p>
            </div>
            <div class="footer-section">
              <h3>Quick Links</h3>
              <a href="index.html">Home</a>
              <a href="culture.html">Culture</a>
              <a href="cuisine.html">Cuisine</a>
              <a href="travel.html">Travel Guide</a>
            </div>
            <div class="footer-section">
              <h3>Connect With Us</h3>
              <div class="social-icons">
                <a href="#"><i data-feather="facebook"></i></a>
                <a href="#"><i data-feather="twitter"></i></a>
                <a href="#"><i data-feather="instagram"></i></a>
                <a href="#"><i data-feather="youtube"></i></a>
              </div>
            </div>
          </div>
          <div class="copyright">
            <p>&copy; 2023 Discover Azerbaijan. All rights reserved.</p>
          </div>
        </footer>
      `;
    }
  }
  customElements.define('custom-footer', CustomFooter);
