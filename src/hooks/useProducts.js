import { useState, useEffect, useCallback } from "react";
import { getProducts, createProduct, updateProduct, deleteProduct } from "../services/api";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const addProduct = useCallback(async (productData) => {
    const newProduct = await createProduct(productData);
    setProducts((prev) => [...prev, newProduct]);
    return newProduct;
  }, []);

  const editProduct = useCallback(async (id, updates) => {
    const updated = await updateProduct(id, updates);
    setProducts((prev) => prev.map((p) => (p.id === id ? updated : p)));
    return updated;
  }, []);

  const removeProduct = useCallback(async (id) => {
    await deleteProduct(id);
    setProducts((prev) => prev.filter((p) => p.id !== id));
  }, []);

  return { products, loading, error, addProduct, editProduct, removeProduct, refetch: fetchProducts };
}

export default useProducts;