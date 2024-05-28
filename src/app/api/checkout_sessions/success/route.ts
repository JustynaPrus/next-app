export async function GET(request: Request) {
    return new Response('Success!!', {
      status: 200,
      headers: { 'Set-Cookie': `token=test` },
    })
  }