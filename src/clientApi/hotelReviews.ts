import { ReviewDocument } from "@/gql/graphql"
import { executeGraphql } from "./graphqlClient"

export const getHotelReviews=async (id: string)=>{
    return await executeGraphql(ReviewDocument,{id})
}