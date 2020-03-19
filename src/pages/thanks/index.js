import React from 'react';
import Layout from '@theme/Layout';

function Thanks() {
  return (
    <Layout title="Thanks">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Special thanks 🙏🏻 to <a href="https://github.com/elC0mpa">Jose Gabriel Companioni</a>
        </p>
      </div>
    </Layout>
  );
}

export default Thanks;