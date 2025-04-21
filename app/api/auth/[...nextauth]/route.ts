import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// ⬇️ EXPORT authOptions CLEANLY
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.email && credentials?.password) {
          return {
            id: "user-id-123",
            name: "Alex Thangaraj",
            email: credentials.email,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Setup the handler
const handler = NextAuth(authOptions);

// ⬇️ EXPORT handler correctly for API routes
export { handler as GET, handler as POST };
