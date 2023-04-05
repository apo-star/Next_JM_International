import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <video autoPlay muted loop className={styles.video}>
          <source src="/homePageBanner.mp4" type="video/mp4" />
        </video>
        <div className={styles.title}>
          <h1>Distribuidor de las mejores marcas</h1>
        </div>
      </div>
      <div className="brands">brands</div>
      <div className="products">products</div>
      <div className="categories">categories</div>
      <div className="catalogs">catalogs</div>
    </div>
  );
}
