import React from 'react';
import Head from 'next/head';

// Markdown
import { attributes, react as HomeContent } from '../content/home.md';

function Content() {
  const { title, cats } = attributes;

  return (
    <>
      <Head>
        <script src='https://identity.netlify.com/v1/netlify-identity-widget.js' />
      </Head>
      <article>
        <h1>{title}</h1>
        <HomeContent />
        <ul>
          {cats.map((cat) => (
            <li key={cat.name}>
              <h2>{cat.name}</h2>
              <p>{cat.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}

export default Content;
