import { Client } from "faunadb";

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY
});

// Isso dará acesso ao banco de dados.
