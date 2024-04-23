import { getHotel } from "@/clientApi/hotel";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Sklep'
export const size = {
  width: 300,
  height: 150,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function OgImage({ params }: { params: { slug: string } }) {
  const { hotel } = await getHotel(params.slug)
  if(!hotel){
    notFound()
  }
 
  return new ImageResponse(
    (
      <div>
        <p>Name: {hotel.name}</p>
      </div>
    ),
  )
}