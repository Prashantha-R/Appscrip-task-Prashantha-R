import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>Lorem ipsum dolor</div>

      <div className={styles.headerInner}>
        <div className={styles.logo}>LOGO</div>

        <nav className={styles.nav}>
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>

        <div className={styles.icons}>
          <span>🔍</span>
          <span>♡</span>
          <span>🛍️</span>
          <span>ENG</span>
        </div>
      </div>
    </header>
  );
}