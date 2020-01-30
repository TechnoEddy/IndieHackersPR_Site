import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>IndieHackersPR_Site</title>
      </Helmet>
      <h1>Indie Hackers PR</h1>
      <h2>
        Link Test click
        <a
          href="https://zeit.co/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Here
        </a>
        !
      </h2>
      <p>
        
        This project shows an empty canvas of incredeble ideas to show in order to represent the official website of Indie hackers directories.
       
       </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
