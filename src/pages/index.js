import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function Homepage() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">
            Acesse a documentação da API Express.
          </p>
          <p>
            <a
              href="https://api.diegooilv.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "20px",
                color: "white",
                fontFamily: "monospace",
                fontWeight: "bold",
                textDecoration: "underline",
              }}>
              https://api.diegooilv.xyz/
            </a>
          </p>

          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Comece com a Documentação
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}

export default Homepage;
