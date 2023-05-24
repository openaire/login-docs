import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageGreeting() {
  return (
    <div className={clsx('col col--12')}>
      <div className="text--center">
        <img className={clsx('logo-full')} src="img/openaire-aai-logo.jpg" alt="OpenAIRE AAI Logo"/>
      </div>
      <div className="text--center padding-horiz--md">
        <p>
        OpenAIRE AAI is an authentication and authorisation platform that enables
        researchers to securely access and share common resources and services
        using their existing academic or social identities.
        </p>
      </div>
      <div className={styles.buttons}>
        <Link
          className="button button--secondary button--lg"
          to="/docs/overview"
        >
          Documentation
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="OpenAIRE AAI Documentation"
    >
      <main>
        <HomepageGreeting />
      </main>
    </Layout>
  );
}
