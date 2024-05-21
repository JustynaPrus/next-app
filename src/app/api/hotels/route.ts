import { NextRequest } from "next/server";

import { getAllHotels } from "@/clientApi/hotels";

export async function GET(request:NextRequest){
    const results = await getAllHotels();

    return Response.json(results)

}