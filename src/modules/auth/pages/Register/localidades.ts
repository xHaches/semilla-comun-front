import { gql } from "@apollo/client";

export const GET_LOCALIDADES = gql`
  query Localidades {
    localidades {
      estado
      fecha_registro
      localidad_id
      nombre
      pais
    }
  }
`;
