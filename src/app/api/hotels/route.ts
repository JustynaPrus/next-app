import { getAllHotels } from "@/clientApi/hotels";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
    const results = await getAllHotels();

    return Response.json(results)

}