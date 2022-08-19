import Layout from "../../components/Layout";
import { DOGGIES, SINGLE_DOGGIE } from "../../GraphQL/perritos";
import Image from "next/image";
import { client } from "../../lib/apollo";

export default function Doggie({ perrito }) {
  return (
    <Layout>
      <Image src={perrito.foto} />
      <h1>{perrito.nombre}</h1>
      <h2>{perrito.edad}</h2>
    </Layout>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: DOGGIES });

  const paths = data.perritos.map((p) => {
    return { params: { id: p.id } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: SINGLE_DOGGIE,
    variables: { id: params.id },
  });

  const attrs = data.perritos[0];

  return {
    props: {
      perrito: {
        nombre: attrs.nombre,
        edad: attrs.edad_estimada,
        estado: attrs.estado,
        foto: attrs.foto.url,
        historia: attrs.historia,
      },
    },
  };
}
