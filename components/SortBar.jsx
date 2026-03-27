import { useEffect, useState } from "react";
import styles from "../styles/SortBar.module.css";

export default function SortBar() {
  const [showFilters, setShowFilters] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowFilters(false);
      } else {
        setShowFilters(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <section className={styles.sortBar}>
      <div className={styles.leftSection}>
        <span className={styles.itemsCount}>3425 ITEMS</span>

        {mounted && (
          <button className={styles.hideFilter} onClick={toggleFilters}>
            {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        )}
      </div>

      <div className={styles.rightSection}>
        <select className={styles.sortSelect} defaultValue="recommended">
          <option value="recommended">RECOMMENDED</option>
          <option value="newest">NEWEST FIRST</option>
          <option value="popular">POPULAR</option>
          <option value="priceLow">PRICE: LOW TO HIGH</option>
          <option value="priceHigh">PRICE: HIGH TO LOW</option>
        </select>
      </div>
    </section>
  );
}