//import { NextAuthOptions, getServerSession } from 'next-auth';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
});

//next auth version 4
// export const authOptions: NextAuthOptions = {
//   providers: [
//     GoogleProvider({
//       //son lo mismo, con esto le decimos que estamos seguros que es un string
//       // clientId: process.env.GITHUB_ID as string,
//       // clientSecret: process.env.GITHUB_SECRET as string,
//       clientId: process.env.GOOGLE_ID!,
//       clientSecret: process.env.GOOGLE_SECRET!,
//     }),
//   ],
// };

//para autenticar usuarios en el backend v4
//export const getAuthSession = () => getServerSession(authOptions);
