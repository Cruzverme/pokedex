import React from 'react';
import {ApolloProvider} from '@apollo/client';

import client from './src/services/index';
import Router from './src/router';

import {BasicInformationProvider} from './src/contexts/BasicInformationContext';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <BasicInformationProvider>
        <Router />
      </BasicInformationProvider>
    </ApolloProvider>
  );
}
