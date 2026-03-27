import styles from "../styles/FilterSidebar.module.css";

const filters = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

export default function FilterSidebar() {
  return (
    <aside className={styles.sidebar}>
      <label className={styles.checkboxRow}>
        <input type="checkbox" />
        <span>CUSTOMIZBLE</span>
      </label>

      {filters.map((item) => (
        <div key={item} className={styles.filterItem}>
          <div className={styles.filterHeader}>
            <span>{item}</span>
            <span>⌄</span>
          </div>
          <p className={styles.filterValue}>All</p>
        </div>
      ))}
    </aside>
  );
}