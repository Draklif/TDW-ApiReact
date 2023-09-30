"use client"

import styles from '../../page.module.css'

export default function Home() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('test');
    }

  return (
    // Generado con GPT, falta corregir estilos y forma
    <div className={styles.form}>
      <h2>Crear un nuevo carrito</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre del Carrito:</label>
          <input
            type="text"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
          />
        </div>
        <button type="submit">Crear Carrito</button>
      </form>
    </div>
  )
}
