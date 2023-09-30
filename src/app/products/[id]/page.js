"use client"

import styles from '../../page.module.css'
import axios from 'axios'
import { useState, useEffect } from 'react';
import Link from 'next/link'

export default function Home({ params }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${ params.id }`)
      .then((response) => {
        setProduct(response.data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error al cargar:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className={styles.container}>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className={styles.flex}>
          <p>Producto {product.id} - {product.title}</p>
          <p>${product.price}</p>
          <p>Categoria: {product.category}</p>
          <div>
            <Link
                href={`/`}
                className={styles.backButton}
            >Volver</Link>
            </div>
        </div>
      )}
    </div>
  )
}
