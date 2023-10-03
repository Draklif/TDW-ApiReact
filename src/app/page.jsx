"use client";

import styles from "./page.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/carts")
      .then((response) => {
        setCarts(response.data);
        setLoading(false);
        console.log(response.data);
        console.log(carts);
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
          {carts.map((cart) => (
            <div key={cart.id} className={styles.card}>
              <h2>Cart {cart.id}</h2>
              <div>
                <Link href={`/carts/${cart.id}`} className="">
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
