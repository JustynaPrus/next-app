import { signIn } from "../../../auth"

export const SignInForm = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github",{ redirectTo: "/profile" })
      }}
    >
      <button type="submit">Signin with GitHub</button>
    </form>
  )
}