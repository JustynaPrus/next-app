export async function GET(request: Request) {
    return new Response('Cancel', {
      status: 200,
      headers: { 'Set-Cookie': `token=test` },
    })
  }