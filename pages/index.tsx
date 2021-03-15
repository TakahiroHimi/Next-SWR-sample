import { GraphQLClient } from "graphql-request";
import useSWR from "swr";
import { Repository } from "../types";

const API = "https://api.github.com/graphql";

type FetchData = {
  repository: {
    name: string;
  }
}

function MovieActors() {
  const client = new GraphQLClient(API, {
    headers: {
      "Authorization":
        "bearer " + process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESSTOKEN,
    },
  });

  const { data, error } = useSWR<FetchData>(
    `
    query GetRepository($repositoryOwner: String!, $repositoryName: String!, $issuesFirst: Int) {
      repository(owner: $repositoryOwner, name: $repositoryName) {
        name
        issues(first: $issuesFirst){
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
    `,
    (query) =>
      client.request(query, {
        repositoryOwner: "TakahiroHimi",
        repositoryName: "NextAuth-sample",
        issuesFirst: 10,
      })
  );

  setTimeout(() => {
    console.log("test", data?.repository.name);
  }, 5000);
  

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return <><p>{data.repository.name}</p></>;
}

const IndexPage = () => (
  <>
    <h1>Hello Next.js 👋</h1>
    {MovieActors()}
  </>
);

export default IndexPage;
