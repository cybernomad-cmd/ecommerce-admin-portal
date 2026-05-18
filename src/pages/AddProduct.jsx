import "./AddProduct.css";
import { useState } from "react";

function AddProduct() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
    image: "",
    description: "",
  });

  function handleChange(e) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      "https://ecommerce-admin-api-kd3m.onrender.com/products",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (response.ok) {
      alert("Product added successfully!");

      setProduct({
        name: "",
        price: "",
        category: "",
        stock: "",
        image: "",
        description: "",
      });
    } else {
      alert("Failed to add product");
    }
  }

  return (
    <div className="add-product-page">
      <div className="add-product-container">

        <h1>Add New Product</h1>

        <p>
          Create and add a new product
          to your inventory dashboard.
        </p>

        <form
          className="product-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="price"
            placeholder="Price"
            value={product.price}
            onChange={handleChange}
          />

          <select
            name="category"
            value={product.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>

            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Footwear">Footwear</option>
            <option value="Fitness">Fitness</option>
            <option value="Home & Living">Home & Living</option>
            <option value="Beauty">Beauty</option>
            <option value="Accessories">Accessories</option>
            <option value="Gaming">Gaming</option>
            <option value="Books">Books</option>
            <option value="Groceries">Groceries</option>
            <option value="Sports">Sports</option>
          </select>

          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            value={product.stock}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={product.image}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Product Description"
            rows="5"
            value={product.description}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Add Product
          </button>

        </form>

      </div>
    </div>
  );
}

export default AddProduct;