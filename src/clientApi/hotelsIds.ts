import { HotelsIdsDocument } from "@/gql/graphql";

import { executeGraphql } from "./graphqlClient";

export const getHotelsIds = async () => {
  return await executeGraphql(HotelsIdsDocument, {});
};
