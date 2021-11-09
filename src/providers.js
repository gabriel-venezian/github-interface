import React from 'react';
import App from './App';
import GitHubProvider from './providers/gitHubProvider';
import { ResetCSS } from './global/resetCSS';

const Providers = () => {
  return (
    <main>
      <GitHubProvider>
        <ResetCSS />
        <App />
      </GitHubProvider>
    </main>
  );
}

export default Providers;
