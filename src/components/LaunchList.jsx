// Nama : Majdi 
// NIM : 2403040205

import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client/react';

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      capital
      emoji
    }
  }
`;

function LaunchList() {
  const { loading, error, data } =
    useQuery(GET_COUNTRIES);

  if (loading) {
    return (
      <div className="card">
        <p>Loading countries...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="card">
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>GraphQL Countries API</h2>

      <ul>
        {data.countries.slice(0, 10).map((country) => (
          <li
            key={country.code}
            className="list-item"
          >
            <strong>
              {country.emoji} {country.name}
            </strong>

            <span>
              Capital: {country.capital || 'Unknown'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LaunchList;