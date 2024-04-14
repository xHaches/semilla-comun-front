// TODO
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  generates: {
    "src/gql/schema.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
        flattenGeneratedTypes: true,
        flattenGeneratedTypesIncludeFragments: true,
        withMutationFn: true,
        declarationKind: "interface",
        preResolveTypes: true,
        withComponent: true,
      },
    },
    "graphql.config.json": {
      plugins: ["introspection"],
    },
  },
  schema: "https://9b97-148-204-15-32.ngrok-free.app/graphql",
  documents: ["src/**/*.gql"],
};

export default config;
