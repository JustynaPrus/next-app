import { AddReviewMutationDocument } from "@/gql/graphql";

import { executeGraphql } from "./graphqlClient";

export const createReview = async (id: string, attribution: string, content: string) => {
  return await executeGraphql(AddReviewMutationDocument, {id, attribution, content});
};