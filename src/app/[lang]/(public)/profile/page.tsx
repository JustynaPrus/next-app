import { redirect } from "next/navigation";

import { auth } from "../../../../auth";

export default async  function Profile() {
  const session = await auth()
 
  if(!session){
    redirect("/")
  }
  if (!session.user){
    return "Problem z logaowaniem"
  }
  return (
    <main>
      <p>{JSON.stringify(session)}</p>
    </main>
  );
}
