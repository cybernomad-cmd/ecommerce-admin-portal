import "./Home.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const heroImages = [
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop",
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      <section
        className="hero-section"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(2, 11, 45, 0.70),
              rgba(2, 11, 45, 0.70)
            ),
            url(${heroImages[currentImage]})
          `,
        }}
      >
        <div className="hero-content">

          <h1>
            Modern Shopping
          </h1>

          <p>
            Manage electronics, fitness products,
            lifestyle essentials, and inventory
            from one beautifully designed admin platform.
          </p>

      <div className="hero-buttons">
  <button
    className="primary-btn"
    onClick={() => navigate("/products")}
  >
    View Products
  </button>
  <button
    className="secondary-btn"
    onClick={() => navigate("/add-product")}
  >
    + Add Product
  </button>
</div>

        </div>
      </section>

      <section className="features-section">
        <div className="feature-card">
          <div className="feature-icon">🎧</div>

          <h3>Premium Electronics</h3>

          <p>
            Discover headphones, keyboards,
            and smart accessories built for
            modern lifestyles.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">👟</div>

          <h3>Fitness & Lifestyle</h3>

          <p>
            Manage trending fitness gear,
            sportswear, and wellness essentials.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📦</div>

          <h3>Inventory Tracking</h3>

          <p>
            Easily monitor product stock,
            inventory levels, and product performance.
          </p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">⚡</div>

          <h3>Fast Workflow</h3>

          <p>
            Simplify product management with
            a fast and beautifully designed experience.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;