class CustomNavbar extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          nav {
            background: linear-gradient(135deg, #E63946 0%, #1D3557 100%);
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .logo { 
            color: white; 
            font-weight: bold; 
            font-size: 1.5rem;
            font-family: 'Playfair Display', serif;
          }
          ul { 
            display: flex; 
            gap: 2rem; 
            list-style: none; 
            margin: 0; 
            padding: 0; 
          }
          a { 
            color: white; 
            text-decoration: none; 
            transition: all 0.3s;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          a:hover { 
            opacity: 0.8;
            transform: translateY(-2px);
          }
          @media (max-width: 768px) {
            nav {
              flex-direction: column;
              padding: 1rem;
            }
            ul {
              margin-top: 1rem;
              gap: 1rem;
            }
          }
        </style>
        <nav>
          <a href="index.html" class="logo">
            <i data-feather="compass"></i>
            Azerbaijan
          </a>
          <ul>
            <li><a href="index.html"><i data-feather="home"></i> Home</a></li>
            <li><a href="culture.html"><i data-feather="music"></i> Culture</a></li>
            <li><a href="cuisine.html"><i data-feather="coffee"></i> Cuisine</a></li>
            <li><a href="travel.html"><i data-feather="map"></i> Travel</a></li>
          </ul>
        </nav>
      `;
    }
  }
  customElements.define('custom-navbar', CustomNavbar);
