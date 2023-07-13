import Layout from '../Layouts/Layout';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ScrollRestoration } from 'react-router-dom';
import { useState } from 'react';

const App = () => {
  const [isNavTransparent, setIsNavTransparent] = useState(true);
  const setNavTransparency = (value) => {
    setIsNavTransparent(value);
  }
  return (
    <div className="App h-screen w-full bg-space-500 font-sans text-space-100 antialiased selection:bg-neon-green selection:text-space-400">
      <Layout isNavTransparent={isNavTransparent}>
        <ScrollRestoration />
        <Outlet context={[setNavTransparency]}/>
      </Layout>
    </div>
  );
}

export default App;
