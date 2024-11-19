import { connectDB } from "@/lib/db/connectDB";
import { UserModal } from "@/lib/models/User";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const handleUser = async (profile) => {
  await connectDB();
  const user = await UserModal.findOne({ email: profile.email });
  if (user) return user;
  else {
    let newUser = new UserModal({
      fullname: profile.name,
      email: profile.email,
      profileImg: profile.picture,
    });
    newUser = await newUser.save();
    return newUser;
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ account, profile }) {
      console.log("Account => ", account);
      console.log("Profile => ", profile);

      const user = await handleUser(profile);

      //   if (account.provider === "google") {
      //     return profile.email_verified && profile.email.endsWith("@example.com");
      //   }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    jwt({ token, user }) {
      console.log("User => ",user)
      console.log("Token => ",token)
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});
