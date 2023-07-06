import Layout from '../Layouts/Layout';
import React from 'react';

const App = ({children}) => {
  return (
    <div className="App h-screen w-full bg-space-500 font-sans text-space-100 antialiased selection:bg-neon-green selection:text-space-400">
      <Layout>
        {children}
      </Layout>
    </div>
  );
}

export default App;
