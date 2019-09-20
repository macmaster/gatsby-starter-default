import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import './Layout.css';

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0
        }}
      >
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Ronald Macmaster</footer>
      </div>
    </React.Fragment>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
