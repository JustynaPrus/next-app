import { HotelByIdDocument } from "@/gql/graphql"

import { executeGraphql } from "./graphqlClient"

export const getHotel=async (id: string)=>{
    return await executeGraphql(HotelByIdDocument,{id})
}