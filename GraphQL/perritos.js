import { gql } from "@apollo/client/core";

const DOGGIES = gql`
  query GetPerrito {
    perritos {
      id
      nombre
      edad_estimada
      estado
      foto {
        url
      }
      historia
    }
  }
`;

const SINGLE_DOGGIE = gql`
  query ($id: String!) {
    perritos(filters: { id: { eq: $id } }) {
      id
      nombre
      edad_estimada
      estado
      foto {
        url
      }
      historia
    }
  }
`;

export { DOGGIES, SINGLE_DOGGIE };
