import React from 'react';
import Layout from './components/Layout';
import Profile from './components/Profile';
import Repositories from './components/Repositories';
import NoSearch from './components/NoSearch';
import useGithub from './hooks/gitHubHooks';

const App = () => {
  const { githubState } = useGithub();

  return (
        <Layout>
          {githubState.hasUser 
          ? 
            <> 
              <Profile />
              <Repositories />
            </> 
          : 
            <NoSearch />
          }
        </Layout>
  );
};

export default App;
