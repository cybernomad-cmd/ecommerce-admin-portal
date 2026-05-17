import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Products.css";

function Products() {
  const navigate = useNavigate();
  const [products] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 2500,
      category: "Electronics",
      stock: 42,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 3000,
      category: "Footwear",
      stock: 18,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Resistance Bands Set",
      price: 1500,
      category: "Fitness",
      stock: 5,
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Yoga Mat",
      price: 4500,
      category: "Fitness",
      stock: 75,
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Stainless Steel Water Bottle",
      price: 2860,
      category: "Kitchen",
      stock: 200,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Mechanical Keyboard",
      price: 5500,
      category: "Electronics",
      stock: 30,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=1200&auto=format&fit=crop",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="products-page">
      <div className="products-header">
        <h1>
          Products ({products.length})
        </h1>

       <button
        className="add-btn"
        onClick={() => navigate("/add-product")}
        >
          + Add Product
        </button>
      </div>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search by name or category..."
          className="search-input"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div
            className="product-card"
            key={product.id}
          >
            <div className="product-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="product-body">
              <span className="badge">
                {product.category}
              </span>

              <h3>{product.name}</h3>

              <div className="product-info">
                <span className="price">
                  KSh{" "}
                  {product.price.toLocaleString()}
                </span>

                <span
                  className={
                    product.stock < 10
                      ? "low-stock"
                      : "stock"
                  }
                >
                  {product.stock} in stock
                </span>
              </div>

              <button className="view-btn">
                View Details →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;