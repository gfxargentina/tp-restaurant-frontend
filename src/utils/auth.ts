import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      //son lo mismo, con esto le decimos que estamos seguros que es un string
      // clientId: process.env.GITHUB_ID as string,
      // clientSecret: process.env.GITHUB_SECRET as string,
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
};
