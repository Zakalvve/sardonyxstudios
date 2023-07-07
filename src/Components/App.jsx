import Layout from '../Layouts/Layout';
import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="App h-screen w-full bg-space-500 font-sans text-space-100 antialiased selection:bg-neon-green selection:text-space-400">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}

export default App;
