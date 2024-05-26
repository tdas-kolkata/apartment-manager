import { options } from "./options";
import NextAuth from "next-auth/next";

const Handler = NextAuth(options)

export {Handler as GET, Handler as POST}