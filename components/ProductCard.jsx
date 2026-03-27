import styles from "../styles/ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.productImage}
        />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.productTitle}>
          {product.title.length > 28
            ? product.title.slice(0, 28) + "..."
            : product.title}
        </h3>

        <p className={styles.productPrice}>
          Sign in or Create an account to see pricing
        </p>
      </div>
    </div>
  );
}