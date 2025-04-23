import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { AuthOptions } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("UserNotFound");
        }

        const isValid = await compare(credentials.password, user.password || "");
        if (!isValid) return null;

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google" && user.email) {
        console.log("Google sign-in detected");
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              email: user.email,
              name: user.name,
              image: user.image,
            },
          });
        }
      }

      return true;
    },

    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },

      async session({ session /*, token*/ }) {
          const userInDb = await prisma.user.findUnique({
              where: { email: session.user?.email || "" },
              include: { store: true },
          });

          if (userInDb && session.user) {
              session.user.id = userInDb.id;
              session.user.isOnboarded = !!userInDb.store;
          }

          return session;
      },
  },
};
