import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.subscribeBox}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div>
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div>
          <h2>mettā muse</h2>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
        </div>

        <div>
          <h2>QUICK LINKS</h2>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
        </div>

        <div>
          <h2>FOLLOW US</h2>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
      </div>
    </footer>
  );
}