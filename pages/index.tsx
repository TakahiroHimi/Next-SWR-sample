import { request } from "graphql-request";
import useSWR from "swr";

const API = "https://countries.trevorblades.com";

type FetchData = {
  countries: {
    code: string;
    name: string;
  }[];
};

function MovieActors() {
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

  console.log(data);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return data.countries.map((country) => (
    <li key={country.code}>{country.name}</li>
  ));
}

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    {MovieActors()}
  </>
);

export default IndexPage;
