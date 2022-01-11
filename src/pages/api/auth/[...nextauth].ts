import { query as q } from "faunadb";

import NextAuth, { Account, Profile, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";

import { fauna } from "../../../services/fauna";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "read:user",
        },
      },
    }),
    // ...add more providers here
  ],

  // jwt: {
  //   signingKey: process.env.SIGNING_KEY,
  // },
  

  callbacks: {
    async signIn({ user, account, profile }) {
      const { email } = user;

      try {
        await fauna.query(q.Create(q.Collection("users"), { data: { email } }));
        return true;
      } catch {
        return false;
      }
    }
  },
});

//FaunaDB create-update-delete - HTTP

/**
 * PostgreSQL, MongoDB - criar uma nova conexão com o banco toda vez que uma função serverless for chamada para autenticação - isso será algo custoso para o Banco de Dados.
 */
