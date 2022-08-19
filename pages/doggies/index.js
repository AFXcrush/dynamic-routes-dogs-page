import Layout from "../../components/Layout";

import Link from "next/link";
import Image from "next/image";

import { DOGGIES } from "../../GraphQL/perritos";
import { client } from "../../lib/apollo";

import styles from "../../styles/Home.module.css";

export default function Doggies({ perritos }) {
  return (
    <Layout title={"Doggies"}>
      <h1 className={styles.title}>ALL THE DOGGIES</h1>
      <section className={styles.doggiesList}>
        {perritos.map((p) => (
          <div key={p.id}>
            <Link href={`doggies/${p.id}`}>
              <a>
                <Image
                  src={p.foto.url}
                  alt={p.nombre}
                  width={300}
                  height={300}
                  className={styles.doggieImg}
                />
              </a>
            </Link>

            <h2 className={styles.someDoggiesName}>{p.nombre}</h2>
          </div>
        ))}
      </section>
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
