import { request } from "graphql-request";
import useSWR from "swr";

const API = "https://countries.trevorblades.com"; // GraphQLエンドポイントのURL

type FetchData = {
  countries: {
    code: string;
    name: string;
  }[];
};

function getCountries() {
  const { data, error } = useSWR<FetchData>(
    `
    query ExampleQuery {
      countries {
        code
        name
      }
    }
    `,
    (query) => request(API, query)
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return data.countries.map((country) => (
    <li key={country.code}>{country.name}</li>
  ));
}

const CountriesPage = () => (
  <>
    <h1>Country List</h1>
    {getCountries()}
  </>
);

export default CountriesPage;
