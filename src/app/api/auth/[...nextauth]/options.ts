import Google from "next-auth/providers/google";
import { AuthOptions } from "next-auth";

export const options: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.GOOGLE_OAUTH_CLIENTID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      profile: function (profile, _){
        let userRole = "member"
        if (profile.email === "tamaldas177@gmail.com") userRole = "admin";
        return {
          ...profile,
          id: profile.sub,
          role: userRole
        }
      }
    }),
  ],
  callbacks:{
    async jwt({token, user}){
      if (user) token.role = user.role;
      return token
    },
    async session({session, token}){
      if(session.user) session.user.role = token.role;
      return session
    }
  }
};
