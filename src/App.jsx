import React from 'react';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

import AppSyncConfig from './AppSyncConfig';
import CoffeeList from './CoffeeList';
import Header from './ui-components/Header';

const client = new Client({
  url: AppSyncConfig.endpoint, // 'https://oupasmkszrgs3hiaz6mbspn3ty.appsync-api.us-east-1.amazonaws.com/graphqlXX',
  exchanges: [cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = AppSyncConfig.apiKey; // 'da2-h3rmbblg2fhdrdeowgyb3usbtm';
    return {
      headers: { 'x-api-key': token }
    }
  }
});

function App() {
  return (
    <Provider value={client}>
      <Header></Header>
      <CoffeeList />
    </Provider>
  );
}

export default App;
