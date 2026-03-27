import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import FilterSidebar from "../components/FilterSidebar";
import SortBar from "../components/SortBar";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  let products = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products");

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("API did not return JSON");
    }

    products = await res.json();
  } catch (error) {
    console.error("Error fetching products:", error);

    // fallback dummy products so Netlify build won't fail
    products = [
      {
        id: 1,
        title: "Sample Backpack",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      },
      {
        id: 2,
        title: "Sample T-Shirt",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879_.jpg",
      },
      {
        id: 3,
        title: "Sample Jacket",
        image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      },
      {
        id: 4,
        title: "Sample Bag",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      },
    ];
  }

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}

export default function Home({ products }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Discover Our Products",
    description:
      "Browse our curated collection of fashion and lifestyle products.",
    url: "https://your-live-site-url.netlify.app/",
  };

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
          content="https://your-live-site-url.netlify.app/"
        />
        <meta
          property="og:image"
          content="https://your-live-site-url.netlify.app/og-image.jpg"
        />
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
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}