import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Bem-vindo à documentação da API completa. A API oferece autenticação, segurança JWT, e acesso a dados via rotas RESTful.
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
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bem-vindo à ${siteConfig.title}`}
      description="Documentação da API para integração e uso do sistema de autenticação e dados.">
      <HomepageHeader />
      <main>
        <section className="container">
          <h2>Visão Geral da API</h2>
          <p>Esta API oferece uma série de funcionalidades para autenticação de usuários e manipulação de dados. Abaixo, você encontra um resumo das principais rotas e o que elas fazem:</p>
          
          <h3>1. 📦 API /app</h3>
          <p>A rota /app lida com a autenticação de usuários, oferecendo operações como login, registro de novos usuários, e recuperação dos dados do usuário autenticado.</p>
          <ul>
            <li><strong>POST /app/signup</strong>: Cria um novo usuário.</li>
            <li><strong>POST /app/login</strong>: Autentica o usuário e gera um token JWT.</li>
            <li><strong>POST /app/</strong>: Retorna os dados do usuário autenticado, protegida por JWT.</li>
            <li><strong>POST /app/buscar</strong>: Recupera todos os registros armazenados no banco de dados.</li>
          </ul>

          <h3>2. 🔐 Segurança e Autenticação</h3>
          <p>A API utiliza JWT para autenticação, garantindo acesso seguro às rotas protegidas. A segurança é garantida com o uso de middlewares como `validKey` e `verifyAuthToken`.</p>

          <h3>3. 📁 Outras Funcionalidades</h3>
          <p>Além das rotas para autenticação, a API oferece funcionalidades adicionais para o gerenciamento de dados do sistema, incluindo CRUD (Create, Read, Update, Delete) em diversas entidades.</p>

          <h3>4. 📄 Recursos</h3>
          <p>Explore a documentação completa para aprender como integrar e interagir com a API usando suas rotas e métodos RESTful.</p>

          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Iniciar Leitura
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
