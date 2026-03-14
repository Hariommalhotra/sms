import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "src/graphql/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        {
          typescript: {
            useTypeImports: true,
          },
        },
        {
          "typescript-operations": {
            useTypeImports: true,
          },
        },
        {
          "typescript-react-apollo": {
            useTypeImports: true,
            apolloReactHooksImportFrom: "@apollo/client/react",
          },
        },
      ],
    },
  },
};

export default config;
