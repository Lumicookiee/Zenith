import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/mongoose';
import User from '@/models/User';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        name: { label: 'Name', type: 'text' },
        isRegister: { label: 'Is Register', type: 'text' }
      },
      async authorize(credentials) {
        await connectDB();

        const { email, password, name, isRegister } = credentials as {
          email: string;
          password: string;
          name?: string;
          isRegister?: string;
        };

        if (isRegister === 'true') {
          if (!name) {
            throw new Error('Name is required for registration');
          }

          const existingUser = await User.findOne({ email });
          if (existingUser) {
            throw new Error('User already exists');
          }

          const hashedPassword = await bcrypt.hash(password, 12);
          const user = await User.create({
            email,
            password: hashedPassword,
            name,
          });

          return {
            id: user._id.toString(),
            email: user.email,
            name: user.name,
          };
        }

        const user = await User.findOne({ email });
        if (!user) {
          throw new Error('No user found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error('Invalid password');
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt' as const,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/login',
    signUp: '/auth/register',
  },
};

export default NextAuth(authOptions);