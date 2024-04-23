import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clu8undly00cp08jp0hmp0sxf/master",
	documents: "src/graphql/queries/*.graphql",
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				defaultScalarType: "unknown",
				useTypeImports: true,
				enumsAsTypes: true,
				skipTypename: true,
				documentMode: "string",
			},
			plugins: [],
		},
	},
};

export default config;