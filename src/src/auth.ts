import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { NextResponse } from "next/server";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized(params) {
      const isLoggedIn = !!params.auth?.user;
      const { pathname } = params.request.nextUrl;

      if (!isLoggedIn && pathname?.includes('/dashboard'))
        return NextResponse.redirect(new URL(`/login`, params.request.nextUrl));
      else if (isLoggedIn && pathname?.includes('/login'))
        return NextResponse.redirect(
          new URL(`/dashboard`, params.request.nextUrl)
        );

      return true;
    },
  },
});
