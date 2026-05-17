import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const { id, name, price, category, stock, image } = product;
  const isLowStock = stock < 10;

  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-card-img" />
      <div className="product-card-body">
        <span className="category-badge">{category}</span>
        <h3 className="product-card-name">{name}</h3>
        <div className="product-card-footer">
          <span className="product-price">${Number(price).toFixed(2)}</span>
          <span className={`stock-label ${isLowStock ? "low" : ""}`}>
            {isLowStock ? "⚠ " : ""}
            {stock} in stock
          </span>
        </div>
        <Link to={`/products/${id}`} className="view-btn">
          View Details →
        </Link>
      </div>
    </div>
  );
}

<Link to={`/products/${product.id}`}>
  <button className="view-btn">View Details</button>
</Link>

export default ProductCard;