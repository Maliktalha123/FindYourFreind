import { signIn } from "../../../auth";

export default function Signin() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button type="submit" className="">Sign in</button>
      </form>
    </div>
  );
}
