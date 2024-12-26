import React from 'react';
import { gql, useQuery } from 'urql';

import NewOrders from './ui-components/NewOrders';

const coffeeOrdersQuery = gql`
query coffeeOrders {
  listOrders {
    id
    coffee
    name
    mobileNumber
  }
}
`;

const CoffeeList = () => {
  const [result] = useQuery({ query: coffeeOrdersQuery });

  const { data, fetching, error } = result;

  return (
    <div>
      {fetching && <p>Loading. Please wait...</p>}

      {error && <p>Something went wrong... {error.message}</p>}

      {/* {data && (
        <ul>
          {data.listOrders.map(coffee => (
            <li key={coffee.id}>{coffee.coffee}</li>
          ))}
        </ul>
      )} */}
      <NewOrders coffeeOrders={data}></NewOrders>
    </div>
  );
};

export default CoffeeList;
