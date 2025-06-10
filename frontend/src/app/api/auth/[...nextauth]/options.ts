import { LOGIN_URL } from "@/lib/apiEndPoints";
import axios from "axios";
import { Account, AuthOptions, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import GoogleProvider from "next-auth/providers/google";

export interface CustomSession {
  user?: CustomUser;
  expires: ISODateString;
}

export interface CustomUser {
  id?: string;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
  provider?: string;
  token?: string;
}

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: CustomUser;
      account: Account | null;
    }) {
      try {
        const payload = {
          email: user.email!,
          name: user.name!,
          oauthId: account?.providerAccountId!,
          provider: account?.provider!,
          image: user?.image,
        };
        console.log("Payload for login:", payload);
        const { data } = await axios.post(LOGIN_URL, payload);
        console.log("Response from login:", data);

        user.id = data?.user?.id?.toString();
        user.token = data?.user?.token;
        return true;
      } catch (error) {
        console.error("Sign-in error:", error);
        return false;
      }
    },
    async session({
      session,
      user,
      token,
    }: {
      session: CustomSession;
      user: CustomUser;
      token: JWT;
    }) {
      session.user = token.user as CustomUser;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};
