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
        <title>Indie Hackers PR</title>
      </Helmet>
      <h1>Indie Hackers Puerto Rico</h1>
      <h2>
        Comunidad de Slack
      <a href="https://indiehackerspr.herokuapp.com/">Comunidad de Slack!</a>
      </h2>
    </main>
  );
}

export default Index;
