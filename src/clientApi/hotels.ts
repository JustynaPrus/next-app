import { HotelDocument } from "@/gql/graphql"
import { executeGraphql } from "./graphqlClient"

export const getAllHotels=async ()=>{
    return await executeGraphql(HotelDocument,{})
}