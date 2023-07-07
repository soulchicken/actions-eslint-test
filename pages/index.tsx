import Link from 'next/link';
import Layout from '../components/Layout';

const num = 100;

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>
      Hello Next.js 👋 {num}
    </h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export default IndexPage;
