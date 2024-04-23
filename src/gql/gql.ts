/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation AddReviewMutation($id: ID!, $attribution: String!, $content: String!) {\n  createReview(\n    data: {hotel: {connect: {id: $id}}, attribution: $attribution, content: $content}\n  ) {\n    id\n    attribution\n    content\n  }\n}": types.AddReviewMutationDocument,
    "query HotelById($id: ID!) {\n  hotel(where: {id: $id}) {\n    slug\n    name\n  }\n}": types.HotelByIdDocument,
    "query Review($id: ID!) {\n  reviews(where: {hotel: {id: $id}}) {\n    attribution\n    id\n    content\n  }\n}": types.ReviewDocument,
    "query HotelsIds {\n  hotels {\n    id\n  }\n}": types.HotelsIdsDocument,
    "query Hotel {\n  hotels {\n    id\n    name\n    description\n    slug\n  }\n}": types.HotelDocument,
    "mutation PublishReviewMutation($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}": types.PublishReviewMutationDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation AddReviewMutation($id: ID!, $attribution: String!, $content: String!) {\n  createReview(\n    data: {hotel: {connect: {id: $id}}, attribution: $attribution, content: $content}\n  ) {\n    id\n    attribution\n    content\n  }\n}"): typeof import('./graphql').AddReviewMutationDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HotelById($id: ID!) {\n  hotel(where: {id: $id}) {\n    slug\n    name\n  }\n}"): typeof import('./graphql').HotelByIdDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Review($id: ID!) {\n  reviews(where: {hotel: {id: $id}}) {\n    attribution\n    id\n    content\n  }\n}"): typeof import('./graphql').ReviewDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query HotelsIds {\n  hotels {\n    id\n  }\n}"): typeof import('./graphql').HotelsIdsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query Hotel {\n  hotels {\n    id\n    name\n    description\n    slug\n  }\n}"): typeof import('./graphql').HotelDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation PublishReviewMutation($id: ID!) {\n  publishReview(where: {id: $id}, to: PUBLISHED) {\n    id\n  }\n}"): typeof import('./graphql').PublishReviewMutationDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
