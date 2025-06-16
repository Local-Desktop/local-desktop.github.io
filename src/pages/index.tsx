import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Hero from "@site/src/components/hero";
import Features from "@site/src/components/features";
import Future from "../components/future";
import BuyMeACoffee from "../components/buy-me-a-coffee";

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Home" description={siteConfig.tagline}>
      <Hero />
      <main>
        <Features />
        <Future />
      </main>
    </Layout>
  );
}
