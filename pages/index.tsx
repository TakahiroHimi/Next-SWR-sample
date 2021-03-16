import Link from "next/link";

const IndexPage = () => (
  <>
    <Link href={`/countries`}>
      <a>countries</a>
    </Link>
    <br />
    <Link href={`/issues`}>
      <a>issues</a>
    </Link>
  </>
);

export default IndexPage;
