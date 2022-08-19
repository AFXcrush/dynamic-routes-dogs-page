import Head from "next/head";
import Layout from "../components/Layout";
import SomeDoggies from "../components/SomeDoggies";
import { DOGGIES } from "../GraphQL/perritos";
import { client } from "../lib/apollo";

import styles from "../styles/Home.module.css";

export default function Home({ perritos }) {
  return (
    <Layout title={"Doggies Home"}>
      <h1 className={styles.title}>SOME OF THE DOGGIES</h1>

      <SomeDoggies doggies={perritos} />
    </Layout>
  );
}

export async function getServerSideProps() {
  const response = await client.query({
    query: DOGGIES,
  });

  const perritos = response?.data?.perritos;
  return {
    props: {
      perritos,
    },
  };
}
