import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";
import type { NextAuthConfig } from "next-auth";
import { cookies } from "next/headers";

interface ApiLoginResponse {
  message: string;
  token: string;
  user: {
    id: string;
    full_name: string;
    email: string;
    phone_number: string;
    password: string;
  };
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const config = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        try {
          const response = await fetch(`${API_BASE_URL}/auth/getuser`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
          });

          const data: ApiLoginResponse = await response.json();

          if (response.ok && data) {
            // Store the token in a cookie
            cookies().set("authToken", data.token, {
              httpOnly: true,
              secure: process.env.NODE_ENV === "production",
              sameSite: "lax",
              path: "/",
            });

            return {
              id: data.user.id,
              name: data.user.full_name,
              email: data.user.email,
              phone_number: data.user.phone_number,
              token: data.token,
            };
          }

          throw new Error(data.message || "Authentication failed");
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw new Error(error.message || "Authentication failed");
          } else {
            throw new Error("Authentication failed");
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id;
        token.phone_number = user.phone_number;
        token.token = user.token;
      }

      // Handle session updates
      if (trigger === "update" && session) {
        Object.assign(token, session);
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.phone_number = token.phone_number as string;
        session.user.token = token.token as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  events: {
    signOut: async () => {
      // Clear the auth token cookie on signout
      cookies().delete("authToken");
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
