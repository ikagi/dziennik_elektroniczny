import React from 'react';
import { init } from 'react-dotenv';

// Initialize react-dotenv with the environment variable prefix
init({
  path: '../.env',
  debug: process.env.NODE_ENV !== 'production',
});

const AppWithEnv = ({ children }) => {
  return <>{children}</>;
};

export default AppWithEnv;