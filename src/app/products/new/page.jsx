"use client";

import { useState } from "react";
import axios from "axios";
import styles from "../../forms.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (productName && productQuantity) addProduct();

    if (products.length === 0) {
      alert("Agregue al menos un producto al carrito.");
      return;
    }

    const newCart = {
      userId: 1,
      date: new Date().toISOString(),
      products: products.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
      })),
    };

    axios
      .post("https://fakestoreapi.com/carts", newCart)
      .then((response) => {
        console.log("Carrito creado:", response.data);
        alert("Carrito creado correctamente");
        setProducts([]);
        setProductName("");
        setProductQuantity("");
      })
      .catch((error) => {
        console.error("Error al crear:", error);
      });
  };

  const addProduct = () => {
    if (productName && productQuantity) {
      const newProduct = {
        id: Math.random() * (999 - 100) + 100,
        name: productName,
        quantity: productQuantity,
      };
      setProducts([...products, newProduct]);
      setProductName("");
      setProductQuantity("");
    } else {
      alert("Ingrese los datos.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="productName" className={styles.label}>
            Nombre del Producto:
          </label>
          <input
            type="text"
            id="productName"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className={styles.userInput}
          />
        </div>
        <div>
          <label htmlFor="productQuantity" className={styles.label}>
            Cantidad:
          </label>
          <input
            type="number"
            id="productQuantity"
            value={productQuantity}
            onChange={(e) => setProductQuantity(e.target.value)}
            className={styles.userInput}
          />
        </div>
        <button type="button" onClick={addProduct} className={styles.button}>
          Agregar Producto
        </button>
        {products.length > 0 ? (
          <>
            <div>
              <h3>Productos Agregados:</h3>
              <ul className={styles.list}>
                {products.map((product, index) => (
                  <li key={index} className={styles.listItem}>
                    {product.name} - Cantidad: {product.quantity}
                  </li>
                ))}
              </ul>
            </div>
            <button type="submit" className={styles.buttonSubmit}>
              Crear Carrito
            </button>
          </>
        ) : (
          <div></div>
        )}
      </form>
    </>
  );
}
