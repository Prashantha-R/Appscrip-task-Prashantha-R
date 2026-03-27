import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import SortBar from "../components/SortBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Discover Our Products",
    description:
      "Browse our curated collection of fashion and lifestyle products.",
    url: "https://appscrip-task-prashantha-r.netlify.app/",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Discover Our Products | Appscrip Task</title>
        <meta
          name="description"
          content="Browse our curated collection of fashion and lifestyle products."
        />
        <meta
          name="keywords"
          content="products, ecommerce, fashion, lifestyle, shopping"
        />
        <meta property="og:title" content="Discover Our Products" />
        <meta
          property="og:description"
          content="Browse our curated collection of fashion and lifestyle products."
        />
        <meta property="og:type" content="website" />
        <meta 
          property="og:url" 
          content="https://appscrip-task-prashantha-r.netlify.app/" />
        <meta 
          property="og:image" 
          content="https://appscrip-task-prashantha-r.netlify.app/og-image.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <Header />

      <main className={styles.main}>
        <section className={styles.heroSection}>
          <h1 className={styles.mainHeading}>DISCOVER OUR PRODUCTS</h1>
          <h2 className={styles.subHeading}>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </h2>
        </section>

        <SortBar />

        <section className={styles.contentSection}>
          <FilterSidebar />

          <div className={styles.productsGrid}>
            {loading ? (
              <p>Loading products...</p>
            ) : products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products available right now.</p>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}