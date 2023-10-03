"use client";

import styles from "../../page.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home({ params }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/carts/${params.id}`)
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
        console.log(response.data.products);
      })
      .catch((error) => {
        console.error("Error al cargar:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
            <div key={product.productId} className={styles.card}>
              <h2>Product {product.productId}</h2>
              <div>
                <Link href={`/products/${product.productId}`} className="">
                  Ver detalle
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
