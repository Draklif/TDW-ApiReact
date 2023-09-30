"use client"

import styles from '../../page.module.css'

export default function Home() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('test');
    }

  return (
    <div className={styles.form}>
      <h2>Crear un nuevo carrito</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Nombre del Carrito:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Crear Carrito</button>
      </form>
    </div>
  )
}
