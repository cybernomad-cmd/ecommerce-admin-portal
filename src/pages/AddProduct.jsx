import "./AddProduct.css";

function AddProduct() {
  return (
    <div className="add-product-page">
<div className="add-product-container">

<h1>Add New Product</h1>

<p>
  Create and add a new product
  to your inventory dashboard.
</p>

<form className="product-form">

<input
type="text"
placeholder="Product Name"
/>

<input
type="number"
placeholder="Price"
/>

<input
type="text"
placeholder="Category"
/>

<input
type="number"
placeholder="Stock Quantity"
/>

<input
type="text"
placeholder="Image URL"
/>

<textarea
placeholder="Product Description"
rows="5"
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