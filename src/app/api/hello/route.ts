import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=test` },
  })
}

// /api/hello?id=1