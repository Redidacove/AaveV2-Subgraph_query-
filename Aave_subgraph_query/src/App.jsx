import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import './App.css';

function App() {  
  
  const APIURL = import.meta.env.VITE_REACT_APP_API_KEY;

  const [tokens, setTokens] = useState([]);

  const client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    const tokensQuery = gql`
      {
        tokens(first: 5) {
          id
          name
          symbol
          decimals
        }
      }
    `;

    const getTokens = async () => {
      try {
        const { data } = await client.query({
          query: tokensQuery,
        });
        console.log('Subgraph data: ', data);
        setTokens(data.tokens);
      } catch (err) {
        console.log('Error fetching data: ', err);
      }
    };

    getTokens();
  }, []);
  return (
    <>
      <div>
        <h1>Tokens Information</h1>
        {tokens !== null && tokens.length > 0 && tokens.map((token) => {
          return (
            <div key={token.id}>
              <div>{token.id}</div>
              <div>{token.decimals}</div>
              <div>{token.name}</div>
              <div>{token.symbol}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
