import { signOut } from "../../../auth"

export const SignOutForm = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({redirectTo:"/"})
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  )
}