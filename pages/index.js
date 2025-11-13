import React, { useState } from 'react';
import Header from './Componetes/Header';


function App() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>¡Tu sitio está listo!</h1>
        <p>Header responsive sin dependencias.</p>
      </main>
    </>
  );
}

export default App;
