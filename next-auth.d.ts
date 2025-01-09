
import { DefaultSession, DefaultUser } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      phone_number: string;
      token?: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    phone_number: string;
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    phone_number?: string;
    token?: string;
  }
}
