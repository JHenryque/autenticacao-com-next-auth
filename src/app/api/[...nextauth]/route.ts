import NextAuth from "auth";

const handler = NextAuth({
  // Configure one or more authentication providers
});

export { handler as GET, handler as POST };
