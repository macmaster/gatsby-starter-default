import React from 'react';

import { Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Http404() {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <h1>Page not found</h1>
      <p>You seem a little lost...</p>
      <Link to="/">Back to Safety</Link>
    </Layout>
  );
}
