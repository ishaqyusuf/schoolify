import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GitHubProvider from "next-auth/providers/github";
// import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@turbocharger/database";

const VERCEL_DEPLOYMENT = !!process.env.VERCEL_URL;

export const authOptions: NextAuthOptions = {
  // debug: true,
  providers: [
    // GitHubProvider({
    //   clientId: process.env.AUTH_GITHUB_ID as string,
    //   clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    //   profile(profile) {
    //     return {
    //       id: profile.id.toString(),
    //       name: profile.name || profile.login,
    //       gh_username: profile.login,
    //       email: profile.email,
    //       image: profile.avatar_url,
    //     };
    //   },
    // }),
    // GoogleProvider({
    //   clientId: process.env.AUTH_GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }
        // const login = await loginAction(credentials);
        return {} as any;
      },
    }),
  ],
  pages: {
    signIn: `/login`,
    verifyRequest: `/login`,
    error: "/login",
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user = {
        ...session.user,
        // @ts-expect-error
        id: token.sub,
        // @ts-expect-error
        username: token?.user?.username || token?.user?.gh_username,
      };
      return session;
    },
  },
};
