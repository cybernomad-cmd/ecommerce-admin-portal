const API_URL = "http://localhost:3001/products";
export async function getProducts() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}
export async function getProductById(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Product not found");
  }

  return response.json();
}
export async function createProduct(product) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  return response.json();
}
export async function updateProduct(id, updatedProduct) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  });

  if (!response.ok) {
    throw new Error("Failed to update product");
  }

  return response.json();
}
export async function deleteProduct(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
}